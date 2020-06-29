import React from "react"
import BusinessCardList from "../BusinessCardList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import SEO from "../seo"

function business() {
  return (
    <div>
      <NavBar />
      <SEO />
      <BusinessCardList />
      <Footer />
    </div>
  )
}

export default business
