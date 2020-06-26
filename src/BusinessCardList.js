import React, { useState } from "react"
import BusinessCard from "./BusinessCard"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import "./css/global.css"
import BusinessCardCategories from "./BusinessCardCategories"

const BusinessCardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Business" } }) {
        nodes {
          data {
            Genre
            Primary_color
            Name
            Link
            Description
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
  const [activeButton, setActiveButton] = useState("VIEW ALL");

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
      primary_color={node.data.Primary_color}
    />
  ))

//   let CardstoRender = business.map((node, i) => (

// <BusinessCardCategories
// business ={business} 
// /> 

//   ))


  return (
    <>
      <div className=" flex justify-center ">
        <Labels labels={labels} onClicked={handleButtonClicked} activeButton= {activeButton} />
      </div>
    <BusinessCardCategories business ={business} /> 
 
    </>
  )
}

export default BusinessCardList
