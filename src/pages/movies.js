import React from "react"
import "../css/global.css"
import MovieList from "../MovieList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../seo"

const movies = () => {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Inequality in America | Movies" />
      <MovieList />
      <Footer />
    </div>
  )
}

export default movies
