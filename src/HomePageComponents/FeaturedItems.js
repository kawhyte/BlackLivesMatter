import React, { useState } from "react"
import Card from "../Card"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { Link } from "gatsby"

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

  let featuredItemsToRender = newPages.map((node, i) => (
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
      featured={node.data.Featured}
    />
  ))

  const booksToRender = featuredItemsToRender.filter(item => {
    
    return (item.props.category.includes("Book") && item.props.featured === true)
  })

  const moviesToRender = featuredItemsToRender.filter(item => {
 
    return item.props.category.includes("Movie") && item.props.featured === true
  })
  const podcastsToRender = featuredItemsToRender.filter(item => {
 
    return item.props.category.includes("Podcast") && item.props.featured === true
  })


  return (
    <div className="bg-white">
    <div className="flex justify-center flex-col  py-8">
      {booksToRender.length > 0 ? (
        <div className="p-2 mt-10 flex container flex-wrap justify-between text-xl mx-auto px-6 sm:px-12 sm:flex-row items-end bg-blue-100">
          <p className="text-md font-bold pt-2 ">Featured Books</p>
          <p className="text-sm pt-4"><Link className="text-blue-500" to="/books">Explore All Books</Link></p>
        </div>
      ) : (
        ""
      )}
      {/* <div className="flex flex-wrap container justify-between  mx-auto px-6 sm:px-12 flex-col-reverse sm:flex-row items-center bg-blue-100"> */}
      <div className=" pl-3 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 bg-blue-100">
        {booksToRender}
      </div>
      </div>

    <div className="flex justify-center flex-col"> 
      {moviesToRender.length > 0 ? (
        <div className="mt-10  flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12  sm:flex-row items-end bg-gray-100">
          <p className="text-md font-bold pt-2 ">Featured Movies</p>
          <p className="text-sm pt-4"><Link className="text-blue-500" to="/movies">Explore All Movies</Link></p>
        </div>
      ) : (
        ""
      )}
      {/* <div className="flex flex-wrap container justify-between  mx-auto px-6 sm:px-12 flex-col-reverse sm:flex-row items-center bg-blue-100"> */}
      <div className="gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 bg-gray-100">
        {moviesToRender}
      </div>
      </div>

    <div className="flex justify-center flex-col"> 
      {podcastsToRender.length > 0 ? (
        <div className="mt-10 container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex sm:flex-row items-end bg-blue-100">
          <p className="text-md font-bold pt-2 ">Featured Podcast</p>
          <p className="text-sm pt-4"><Link className="text-blue-500" to="/podcasts">Explore All Podcast</Link></p>
        </div>
      ) : (
        ""
      )}
      {/* <div className="flex flex-wrap container justify-between  mx-auto px-6 sm:px-12 flex-col-reverse sm:flex-row items-center bg-blue-100"> */}
      <div className="gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 bg-blue-100">
        {podcastsToRender}
      </div>
      </div>
    </div>
  )
}

export default FeaturedItems
