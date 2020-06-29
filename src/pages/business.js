import React from "react"
import BusinessCardList from "../BusinessCardList"
import NavBar from "../NavBar"
import Footer from "../Footer"
import Categories from "../Categories"

function business() {
  return (
    <div>
      <NavBar />
     
      <BusinessCardList />
      <Footer />
    </div>
  )
}

export default business
