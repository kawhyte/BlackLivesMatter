import React from "react"
import BusinessCardList from "../BusinessCardList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../seo"

function business() {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Inequality in America | Black-owned Businessess"/>
      <BusinessCardList />
      <Footer />
    </div>
  )
}

export default business
