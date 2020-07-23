import React from "react"
import "../css/global.css"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Categories from "../Categories"
import FeaturedItems from "../HomePageComponents/FeaturedItems"
import NewUsers from "../NewUsers"
import SEO from "../Seo"
import Questions from "../Questions"
import Quotes from "../Quotes"
const index = () => {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Inequality in America | Home" /> 
      <Hero />
      <Categories />
      <NewUsers />
      <Questions />
      <Quotes />
      <FeaturedItems />
      <Footer />
    </div>
  )
}

export default index
