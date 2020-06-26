import React from "react"
import "../css/global.css"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedItems from "../HomePageComponents/FeaturedItems"
import newUsers from "../newUsers"

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <newUsers /> 
      {/* <Categories /> */}
      <FeaturedItems />
      <Footer />
    </div>
  )
}

export default index
