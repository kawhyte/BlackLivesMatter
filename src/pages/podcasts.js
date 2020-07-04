import React from "react"
import "../css/global.css"
import PodcastList from "../PodcastList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../Seo"

const books = () => {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Inequality in America | Podcast"/>
      <PodcastList />
      <Footer />
    </div>
  )
}

export default books
