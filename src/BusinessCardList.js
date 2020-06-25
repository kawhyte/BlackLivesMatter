import React, { useState } from "react"
import BusinessCard from "./BusinessCard"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import "./css/global.css"

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

  const FoodBusinessToRender = business.filter(item => {
    return item.props.category.includes("Food")
  })
  const EtsyBusinessToRender = business.filter(item => {
    return item.props.category.includes("Etsy Sellers")
  })
  const CosmeticsBusinessToRender = business.filter(item => {
    return item.props.category.includes("Cosmetics")
  })
  const HomeBusinessToRender = business.filter(item => {
    return item.props.category.includes("Home & Living")
  })

  return (
    <>
      <div className=" flex justify-center ">
        <Labels labels={labels} onClicked={handleButtonClicked} activeButton= {activeButton} />
      </div>
      {FoodBusinessToRender.length > 0 ? (
         <div className="mt-10 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row ">
         <p className="text-md font-bold p-2 ">Food</p>
       </div>
      ) : (
        ""
      )}
 
      <div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
    
         {FoodBusinessToRender}

      </div>

      {EtsyBusinessToRender.length > 0 ? (
            <div className="mt-10 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Etsy Sellers</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {EtsyBusinessToRender}
      </div>

      {CosmeticsBusinessToRender.length > 0 ? (
         <div className="mt-10 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Cosmetics</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {CosmeticsBusinessToRender}
      </div>

      {HomeBusinessToRender.length > 0 ? (
         <div className="mt-10 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Home & Living</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HomeBusinessToRender}
      </div>
    </>
  )
}

export default BusinessCardList
