import React, { useState } from "react"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import { createCards } from "./common/createCards"
import { filterByTags } from "./common/filterByTags"
import "./css/global.css"
import CreatePageSection from "./HomePageComponents/CreatePageSection"

const BookList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Books" }, data: { Category: { eq: "Book" } } }
        limit: 100
      ) {
        nodes {
          id
          recordId
          data {
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

  const [state, setState] = useState(data.allAirtable.nodes)
  const [labels] = useState(data.allAirtable.nodes)
  const [activeButton, setActiveButton] = useState("VIEW ALL")

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })

  const handleButtonClicked = filterByTags(data, setActiveButton, setState)

  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

  let books = createCards(newPages)

 console.log("BOOK $$$$$%%%%%%%%% ", labels)
 console.log("BOOK $$$$$%%%%%%%%% State ", state)

  return (
    <>
      <Labels
        labels={labels}
        onClicked={handleButtonClicked}
        activeButton={activeButton}
        type={"Books"}
      />

      <div
        className="pl-4  gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4"
      >
        {books}
      </div>
    </>
  )
}

export default BookList
