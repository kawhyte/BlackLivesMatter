import React from "react"
import BusinessCardList from "../BusinessCardList"
import NavBar from "../NavBar"
import Categories from "../Categories"
import Footer from "../Footer"

function business() {
  return (
    <div>
      <NavBar />
      <Categories /> 
      <BusinessCardList />
      <Footer />
    </div>
  )
}

export default business
