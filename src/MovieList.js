import React, { useState } from "react"
import Card from "./Card"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import "./css/global.css"



const BookList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable (limit: 100, filter: {data: { Category: {eq: "Movie"}}}) {
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

  // const handleInputChange = event => {
  //   const query = event.target.value

  //   const contactsToBeFiltered = data.allAirtable.nodes || []

  //   const contacts = contactsToBeFiltered.filter(contact => {
  //     if (contact.data.Contact_Name !== null) {
  //       returnedName = contact.data.Contact_Name.toLowerCase().includes(
  //         query.toLowerCase()
  //       )
  //     }
  //     if (contact.data.State !== null) {
  //       returnedState = contact.data.State.toLowerCase().includes(
  //         query.toLowerCase()
  //       )
  //     }

  //     return returnedName || returnedState
  //   })

  //   setState(contacts)
  // }

  // const handlePageChange = page => {
  //   setPageState(prevState => {
  //     return { ...prevState, currentPage: page }
  //   })
  // }

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

  const booksToRender = books.filter(item => {
    console.log("item ", item)
    return item.props.category.includes("Book")
  })
  const moviesToRender = books.filter(item => {
    console.log("item ", item)
    return item.props.category.includes("Movie")
  })
  console.log("booksToRender ", booksToRender)
  console.log("moviesToRender ", moviesToRender)

  return (
    <>
      <div className=" flex justify-center ">
        <Labels labels={labels} onClicked={handleButtonClicked} />
      </div>


      {/* <p className = "uppercase container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">Books About Race</p> */}
      {moviesToRender.length > 0 ? (
        <div className="flex container flex-wrap justify-start text-3xl mb-4 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center ">
          <p className="font-bold text-md">Movies/Documentaries</p>
        </div>
      ) : (
        ""
      )}
      <div className="flex container flex-wrap justify-center  mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center bg-gray-100">
        {moviesToRender}
      </div>

      {/* {moviesToRender.length > 0 ? (
        <div className="flex  flex-wrap justify-start text-3xl mb-4  mt-4 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center ">
          <p className="font-black ">Movies/documentaries</p>
        </div>
      ) : (
        ""
      )} */}
      {/* <div className="flex flex-wrap justify-center  mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center bg-gray-100">
        {moviesToRender}
      </div> */}
      {/* <Pagination
          itemsCount={state.length}
          pageSize={pageState.pageSize}
          onPageChange={handlePageChange}
          currentPage={pageState.currentPage}
        /> */}
    </>
  )
}

export default BookList
