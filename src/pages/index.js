import React from "react"
import "../css/global.css"
import BookList from "../BookList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedBooks from "../HomePageComponents/FeaturedBooks"
import FeaturedMovies from "../HomePageComponents/FeaturedMovies"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <FeaturedBooks />
      <FeaturedMovies />
      {/* <BookList /> */}
      <Footer />
    </div>
  )
}

export default index
