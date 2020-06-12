import React from "react"
import "../css/global.css"
import BookList from "../BookList"
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import Details from "../details"




const index = () => {

  return (
     
    <div>
      <NavBar /> 
      <Hero />
    
      <BookList />
      <Footer />
    </div>
  )
}

export default index
