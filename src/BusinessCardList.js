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
            Keywords
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

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })

  const handleButtonClicked = filterValue => {
    const contactsToBeFiltered = data.allAirtable.nodes || []

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
    />
  ))

  const businessToRender = business.filter(item => {
    console.log("item ", item)
    return item.props.category.includes("Food")
  })
  //   const moviesToRender = books.filter(item => {
  //     console.log("item ", item)
  //     return item.props.category.includes("Movie")
  //   })
  console.log("booksToRender ", businessToRender)
  //   console.log("moviesToRender ", moviesToRender)

  return (
    <>
          <div className=" flex justify-center ">
        <Labels labels={labels} onClicked={handleButtonClicked} />
      </div>
      {business.length > 0 ? (
        <div className="flex  flex-wrap justify-start text-3xl mb-4 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center ">
          <p className="font-black">Business</p>
        </div>
      ) : (
        ""
      )}

      <div className="gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100">
        {business}
      </div>
    </>
  )
}

export default BusinessCardList
