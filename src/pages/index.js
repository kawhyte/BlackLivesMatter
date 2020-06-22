import React from "react"
import "../css/global.css"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedBooks from "../HomePageComponents/FeaturedBooks"
import FeaturedMovies from "../HomePageComponents/FeaturedMovies"
import FeaturedPodcasts from "../HomePageComponents/FeaturedPodcasts"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <FeaturedBooks />
      <FeaturedMovies />
      <FeaturedPodcasts />
      {/* <BookList /> */}
      <Footer />
    </div>
  )
}

export default index
