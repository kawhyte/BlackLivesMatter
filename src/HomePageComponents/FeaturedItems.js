import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { createCards } from "../common/createCards"
import CreatePageSection from "../HomePageComponents/CreatePageSection"


function FeaturedItems() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: {table: {eq: "Books"}}) {
        nodes {
          id
          data {
            Slug
            Featured
            Author
            Color
            Date
            Description
            Genre
            Link
            Name
            Publisher
            Category
            Rating
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
    
    return (
      (item.props.category.includes("Book") && item.props.featured === true)||
      (item.props.category.includes("Movie") && item.props.featured === true) ||
      (item.props.category.includes("Podcast") && item.props.featured === true)
      
      )
  })


  return (
    <>
    {/* <div className="flex justify-center flex-col  py-8"> */}
   
    <CreatePageSection business={itemsToRender} renderDetails ={true}/>

     {/* </div> */}

     </>

  )
}

export default FeaturedItems
