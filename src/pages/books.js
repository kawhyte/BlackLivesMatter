import React from "react"
import "../css/global.css"
import BookList from "../BookList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Categories from "../Categories"
import Footer from "../Footer"

const books = () => {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Categories />
      <BookList />
      <Footer />
    </div>
  )
}

export default books
