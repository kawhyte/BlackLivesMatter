import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { createCards } from "../common/createCards"
import "../css/global.css"

function StartHere() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Books" } }) {
        nodes {
          id
          recordId
          data {
            NewUserItem
            Slug
            Author
            Color
            Date
            Description
            Genre
            Link
            Name
            Publisher
            Category
            Featured
            Rating
            Image
            Attachments {
              filename
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

  const [state] = useState(data.allAirtable.nodes)

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })

  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

  let books = createCards(newPages)

  const itemsToRender = books.filter(item => {
    return item.props.NewUserItem === true
  })

  return (
    <>
      <div className=" mx-auto container flex justify-center flex-col">
        <div className="pl-6 pr-6 pt-6">
          <h3 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">
            New to Race Relations in America?
          </h3>
          <h1 className="text-xl text-indigo-600 mb-5 mt-4">
            We've hand-picked these media to get you started:
          </h1>
        </div>

        <div className="m-2 pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {itemsToRender}
        </div>
      </div>
    </>
  )
}

export default StartHere
