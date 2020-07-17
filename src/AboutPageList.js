import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutPageCard from "./AboutPageCard"
import "./css/global.css"

const AboutPageList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {table: {eq: "Person"}}, sort: {order: DESC, fields: data___Death}
      ) {
        nodes {
          id
          recordId
          data {
            Name
            Born
            Death
            Category
            Link
            Img
            Age
          }
        }
      }
    }
  `)

  const [state] = useState(data.allAirtable.nodes)
 console.log("STATE " , state)

  let person = state.map((node, i) => (
    <AboutPageCard
      key={i}
     
      name={node.data.Name}
      image ={node.data.Img}
      link ={node.data.Link}
      //image={node.data.Attachments[0].thumbnails.full.url}
      
      // description={node.data.Description}
      born={node.data.Born}
      death={node.data.Death}
      age ={node.data.Age}

    />
  ))


//   const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

//   let books = createCards(newPages)



  return (
    <>

      <div
        className="p-3 mt-8 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      >
        {person}
      </div>
    </>
  )
}

export default AboutPageList
