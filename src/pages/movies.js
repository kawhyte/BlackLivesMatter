import React from "react"
import "../css/global.css"
import MovieList from "../MovieList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Categories from "../Categories"
import Footer from "../Footer"

const movies = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <MovieList />
      <Footer />
    </div>
  )
}

export default movies
