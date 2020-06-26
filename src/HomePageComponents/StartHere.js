import React, { useState } from "react"
import Labels from "../Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { createCards } from "../common/createCards"
import { filterByTags } from "../common/filterByTags"
import "../css/global.css"
import CreatePageSection from "../HomePageComponents/CreatePageSection"


function StartHere() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Books" } }) {
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

//   const handleButtonClicked = filterByTags(data, setActiveButton, setState)

  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

  let books = createCards(newPages)

  const itemsToRender = books.filter(item => {
    
    return (item.props.category.includes("Book"))
  })

  return (
    <>
      {/* <Labels
        labels={labels}
        onClicked={handleButtonClicked}
        activeButton={activeButton}
      /> */}

      <div className= "pl-4  gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

      {itemsToRender}
      </div>
      {/* <CreatePageSection business={books} /> */}
    </>
  )
}

export default StartHere
