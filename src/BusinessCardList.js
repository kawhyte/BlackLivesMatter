import React, { useState } from "react"
import BusinessCard from "./BusinessCard"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import "./css/global.css"
import CreatePageSection from "./HomePageComponents/CreatePageSection"
import Categories from "./Categories"

const BusinessCardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Business" } }) {
        nodes {
          data {
            Genre
            Excerpt 
            Primary_color
            Color
            Name
            Link
            Description
            Type
            Category
            Attachments {
              thumbnails {
                full {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState(data.allAirtable.nodes)
  const [labels] = useState(data.allAirtable.nodes)
  const [activeButton, setActiveButton] = useState("VIEW ALL")

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })

  const handleButtonClicked = filterValue => {
    const contactsToBeFiltered = data.allAirtable.nodes || []
    setActiveButton(filterValue.item)

    if (filterValue.item === "VIEW ALL") {
      setState(data.allAirtable.nodes)
      return
    }

    let contacts = contactsToBeFiltered.filter(contact => {
      let found = false

      if (contact.data.Genre !== null) {
        contact.data.Genre.forEach(element => {
          if (element.toLowerCase().includes(filterValue.item.toLowerCase())) {
            found = true
          }
        })
      }

      return found
    })
    setState(contacts)
  }

  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

  let business = newPages.map((node, i) => (
    <BusinessCard
      key={i}
      id={node.id}
      name={node.data.Name}
      image={node.data.Attachments[0].thumbnails.full.url}
      description={node.data.Description}
      link={node.data.Link}
      category={node.data.Category}
      excerpt ={node.data.Excerpt}
      primary_color={node.data.Primary_color}
      type={node.data.Type}
    />
  ))

  return (
    <>
      {/* <div className="flex justify-center "> */}
        <Labels
          labels={labels}
          onClicked={handleButtonClicked}
          activeButton={activeButton}
          type = {"Black-Owned Businesses"}
          bgColor={"bg-purple-100"}
          
        />
         <Categories />
      {/* </div> */}
      <CreatePageSection business={business} renderDetails ={true} showlinks={false} />
    </>
  )
}

export default BusinessCardList
