import React from "react"
import "../css/global.css"
import BookList from "../BookList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <BookList />
      <Footer />
    </div>
  )
}

export default index
