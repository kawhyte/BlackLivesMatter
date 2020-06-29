import React from "react"
import "../css/global.css"
import CardList from "../bookList"
import NavBar from "../NavBar"
import Footer from "../Footer"

const books = () => {
  return (
    <div>
      <NavBar />
      <CardList />
      <Footer />
    </div>
  )
}

export default books
