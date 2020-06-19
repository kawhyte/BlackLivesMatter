import React, { useState } from "react"
import Card from "../Card"
import Labels from "../Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "../common/paginate"
import { Link } from "gatsby"
// import "./css/global.css"

function FeaturedPodcasts() {
  const data = useStaticQuery(graphql`
    {
      allAirtable(limit: 4, filter: { data: { Category: { eq: "Podcast" } } }) {
        nodes {
          id
          data {
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

  const [state, setState] = useState(data.allAirtable.nodes)
  const [labels] = useState(data.allAirtable.nodes)

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })



  const handleButtonClicked = filterValue => {
    const contactsToBeFiltered = data.allAirtable.nodes || []

    if (filterValue.item === "VIEW ALL") {
      setState(data.allAirtable.nodes)
      return
    }

    let contacts = contactsToBeFiltered.filter(contact => {
      let found = false

      if (contact.data.Genre !== null) {
        contact.data.Genre.forEach(element => {
          if (element.toLowerCase().includes(filterValue.item.toLowerCase())) {
            found = true
          }
        })
      }

      return found
    })
    setState(contacts)
  }

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
    />
  ))

  const podcastsToRender = books.filter(item => {
    console.log("item ", item)
    return item.props.category.includes("Podcast")
  })
  const moviesToRender = books.filter(item => {
    console.log("item ", item)
    return item.props.category.includes("Movie")
  })
  // console.log("booksToRender ", booksToRender)
  // console.log("moviesToRender ", moviesToRender)

  return (
    <>
      {podcastsToRender.length > 0 ? (
        <div className="mt-10  flex container  flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-end bg-blue-100">
          <p className="text-md font-bold p-2 ">Featured Podcasts</p>
          <p className="text-sm "><Link className="text-blue-500" to="/podcasts">Explore All Podcasts</Link></p>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap container justify-between  mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center bg-blue-100">
        {podcastsToRender}
      </div>
    </>
  )
}

export default FeaturedPodcasts