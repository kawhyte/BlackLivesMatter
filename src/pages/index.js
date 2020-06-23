import React from "react"
import "../css/global.css"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedItems from "../HomePageComponents/FeaturedItems"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <FeaturedItems />
      <Footer />
    </div>
  )
}

export default index
