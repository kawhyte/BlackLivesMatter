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
    
    return (item.props.NewUserItem === true)
  })

  return (
    <>
    <div className="flex justify-center flex-col"> 
      {/* <Labels
        labels={labels}
        onClicked={handleButtonClicked}
        activeButton={activeButton}
      /> */}

      <div className= "bg-yellow-100 pl-3 border-dotted border-4 border-gray-400 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">

      {itemsToRender}
      </div>
      </div>




      
      {/* <CreatePageSection business={books} /> */}
    </>
  )
}

export default StartHere
