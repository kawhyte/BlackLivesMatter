import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./paginate"
import { createCards } from "./createCards"
import "../css/global.css"
let addLabelToCard = true

function Recommendation() {
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

  let randomNumber = Math.floor(Math.random()*books.length-1);

  if (randomNumber + 4 > books.length ) {

    randomNumber = (books.length - 7)
  }
  const itemsToRender = books.slice(randomNumber,randomNumber + 4)
  // const itemsToRender = books.filter(item => {
  //   return item.props.NewUserItem === true
  // })

  return (
    <>
      <div className=" mx-auto container flex justify-center flex-col">
        <div className="pl-6 pr-6 pt-6">
          <h1 className="text-xl text-gray-600 mb-5 mt-4">
          You may also like the following:
          </h1>
        </div>

        <div className="m-2 pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {itemsToRender}
        </div>
      </div>
    </>
  )
}

export default Recommendation
