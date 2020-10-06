import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { createCards } from "../common/createCards"
import "../css/global.css"
let addLabelToCard = true

function StartHere() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Books" } }) {
        nodes {
          id
          recordId
          data {
            NewUserItem
            Excerpt
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

  let books = createCards(newPages, addLabelToCard)

  const itemsToRender = books.filter(item => {
    return item.props.NewUserItem === true
  })

  return (
    <>
      <div className=" mx-auto container flex justify-center flex-col">

        <div className="pl-6 pr-6 pt-4 sm:mb-6">

          <h3 className="text-2xl  text-left sm:text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl sm:mb-6">
             Understanding Racial Injustice in America.
          </h3>
        <span class=" mr-2 text-base leading-6 text-black font-semibold tracking-wide uppercase">Quick Start:</span>
          <span className=" text-gray-800 mb-5 mt-1  text-base leading-6 font-light tracking-wide" >
            We've hand-picked the following four items to get you started
          </span>

        </div>

        <div className="m-2 pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {itemsToRender}
        </div>
      </div>
    </>
  )
}

export default StartHere
