import React from "react"
import "../css/global.css"
import PodcastList from "../PodcastList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import Categories from "../Categories"

const books = () => {
  return (
    <div>
      <NavBar />
      
      <PodcastList />
      <Footer />
    </div>
  )
}

export default books
