import React from "react"
import "../css/global.css"
import BookList from "../BookList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      {/* <BookList /> */}
      <Footer />
    </div>
  )
}

export default index
