import React from "react"
import BusinessCardList from "../BusinessCardList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../Seo"

function business() {
  return (
    <div>
      <NavBar />
      <SEO title="Racial Justice in America | Black-owned Businessess"/>
      <BusinessCardList />
      <Footer />
    </div>
  )
}

export default business
