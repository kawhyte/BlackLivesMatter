import React, { useState } from "react"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import { createCards } from "./common/createCards"
import { filterByTags } from "./common/filterByTags"
import "./css/global.css"
import Categories from "./Categories"
import AboutPageCard from "./AboutPageCard"

const AboutPageList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Person" } }
        limit: 100
      ) {
        nodes {
          id
          recordId
          data {
            Slug
            Born
            Death
            Excerpt 
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
            Img
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

  let person = state.map((node, i) => (
    <AboutPageCard
      key={i}
     
      name={node.data.Name}
      image ={node.data.Img}
      link ={node.data.Link}
      //image={node.data.Attachments[0].thumbnails.full.url}
      
      description={node.data.Description}
      born={node.data.Born}
      death={node.data.Death}

    />
  ))


//   const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

//   let books = createCards(newPages)



  return (
    <>
      {/* <Labels
        labels={labels}
        onClicked={handleButtonClicked}
        activeButton={activeButton}
        type={"Books"}
        bgColor={"bg-red-100"}
      /> */}
      {/* <Categories /> */}
      <div
        className="pl-4 mt-8 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4"
      >
        {person}
      </div>
    </>
  )
}

export default AboutPageList
