import React from "react"
import "../css/global.css"
import CardList from "../CardList"
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
      <CardList />
      <Footer />
    </div>
  )
}

export default books
