import React from "react"
import "../css/global.css"
import PodcastList from "../PodcastList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../seo"

const books = () => {
  return (
    <div>
      <NavBar />
      <SEO />
      <PodcastList />
      <Footer />
    </div>
  )
}

export default books
