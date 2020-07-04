import React from "react"
import "../css/global.css"
import CardList from "../BookList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../Seo"

const books = () => {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Inequality in America | Books"
      />
      <CardList />
      <Footer />
    </div>
  )
}

export default books
