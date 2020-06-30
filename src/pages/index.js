import React from "react"
import "../css/global.css"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedItems from "../HomePageComponents/FeaturedItems"
import NewUsers from "../NewUsers"
import SEO from "../seo"
const index = () => {
  return (
    <div>
      <NavBar />
      <SEO  title="Home | Racial Equality"/> 
      <Hero />
      <Categories />
      <NewUsers />
      <FeaturedItems />
      <Footer />
    </div>
  )
}

export default index
