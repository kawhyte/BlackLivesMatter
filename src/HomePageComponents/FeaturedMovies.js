import React, { useState } from "react"
import Card from "../Card"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
// import "./css/global.css"
import { Link } from "gatsby"

function FeaturedBooks() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: {table: {eq: "Books"}, data: {Category: {eq: "Movie"}}}, limit: 5){
        nodes {
          id
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

  let books = newPages.map((node, i) => (
    <Card
      key={i}
      id={node.id}
      name={node.data.Name}
      bookImage={node.data.Attachments[0].thumbnails.full.url}
      genre={node.data.Genre}
      author={node.data.Author}
      rating={node.data.Rating}
      description={node.data.Description}
      published={node.data.Publisher}
      date={node.data.Date}
      color={node.data.Color}
      type={node.data.Type}
      link={node.data.Link}
      category={node.data.Category}
      slug={node.data.Slug}
    />
  ))

  const booksToRender = books.filter(item => {
  
    return item.props.category.includes("Book")
  })
  const moviesToRender = books.filter(item => {
  
    return item.props.category.includes("Movie")
  })


  return (
    <>
      {moviesToRender.length > 0 ? (
        <div className="mt-10 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-end  bg-gray-100">
          <p className="text-md font-bold p-2">Featured Movies</p>
          <p className="text-sm pt-4"><Link className="text-blue-500" to="/movies">Explore All Movies</Link></p>
        </div>
      ) : (
        ""
      )}
      {/* <div className="flex flex-wrap  container justify-between  mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center bg-gray-100"> */}
      <div className="gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 bg-gray-100">

       {moviesToRender}
      </div>
    </>
  )
}

export default FeaturedBooks
