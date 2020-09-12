import React from "react"
import "../css/global.css"
import MovieList from "../MovieList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../Seo"

const movies = () => {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Justice in America | Videos" />
      <MovieList />
      <Footer />
    </div>
  )
}

export default movies
