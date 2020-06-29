import React from "react"
import "../css/global.css"
import MovieList from "../MovieList"
import NavBar from "../NavBar"
import Footer from "../Footer"

const movies = () => {
  return (
    <div>
      <NavBar />
      <MovieList />
      <Footer />
    </div>
  )
}

export default movies
