import React from "react"
import { Link } from "gatsby"
import NavBar from "../NavBar"
import Footer from "../Footer"
import { graphql } from "gatsby"
import SEO from "../Seo"
import arrow  from "../img/icons8-back-small.png"
import amazon  from "../img/icons/icons8-amazon.svg"
import youtube  from "../img/icons/icons8-play-button.svg"
import netflix  from "../img/icons/icons8-netflix-100-2.png"
import spotify  from "../img/icons/icons8-spotify-100.png"
import indie  from "../img/icons/icons8-for-you-100.png"
import google  from "../img/icons/icons8-google.svg"
import libby  from "../img//icons/libby.png"
import Recommendation from "../common/recommendations"

const Details = ({ data }) => {
  let item = data.allAirtable.nodes[0].data

  let ratingNumber = item.Rating


  return (
    <>
    <SEO 
    title = {item.Name}
    image = {item.Image}
    description = {item.Description}
    
    />


      {/* <div>{item.Name}</div>
    <div>{item.image}</div> */}
      {/* <div>{item.Image}</div> */}
      <NavBar />
      {/* <Hero /> */}
      <section className="flex flex-wrap mt-24 justify-center container mx-auto px-2 sm:px-2  sm:flex-row  min-h-screen">
        <div className="px-1 py-2 justify-start ">
          <div className="text-left mb-12 flex justify-start">
          <Link to="/"> <img src ={arrow} width="20" height="1"  alt="arrow"/> </Link>
            <Link to="/">
              <span className=" mr-3 pl-1">Home</span>
            </Link>
          </div>
          <div className="container px-12  justify-center sm:px-12 flex flex-col lg:flex-row ">
            <div className="lg:w-2/5 flex items-start justify-start">
              <img
                alt="Poster of book or Video"
                className="mr-10 mb-8 object-cover  w-full  md:object-right lg:object-bottom xl:object-cover rounded border border-gray-200"
                src={item.Image}
                height={20}
              />
            </div>

            <div className="w-full lg:w-3/5 lg:ml-16">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase text-left ">
                {item.Author}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium text-left">
                {item.Name}
              </h1>
              <h2 className="text-sm title-font text-gray-500 mb-3 text-left">
                {item.Publisher}
                {/* on {item.Date} */}
              </h2>
              <p className="leading-relaxed text-left">{item.Description}</p>
              <div className="flex justify-start mb-4 mt-4">
                <span className="flex items-center">
                  <span className="mr-3 text-sm">Rating</span>

                  {[...Array(5)].map((star, i) => {
                    if (star !== null && Math.floor(ratingNumber)) {
                      ratingNumber--
                      return (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      )
                    } else {
                      return (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current text-gray-300"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      )
                    }
                  })}
                  <span className=" ml-3 mr-3 text-sm">{item.Rating}</span>
                </span>
              </div>
    
 
                <p className="text-md text-left mt-12 ">Where to find <span className="font-semibold italic"> {item.Name}:</span> </p>
           

         <div className="flex flex-wrap items-center justify-start  top-auto border-b   border-gray-400 pt-8  pb-12">
        {  
        item.BlackOwned !== null ?

         <a href={item.BlackOwned}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={indie} className="fill-current w-6 h-6 mr-2" alt="icon"/> Small Business *
           </button> </a>
        :""
       
        } 
        {  
        item.Libby !== null ?

         <a href={item.Libby}> <button className="bg-gray-200 text-gray-800 px-4 py-2  rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={libby} className="fill-current w-6 h-6 mr-2" alt="icon"/> Library**
           </button> </a>
        :""
       
        } 
        {  
        item.Amazon !== null ?

         <a href={item.Amazon}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={amazon} className="fill-current w-6 h-6 mr-2" alt="icon"/> Amazon
           </button> </a>
        :""
       
        } 

        {  
        item.Youtube !== null ?

         <a href={item.Youtube}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400">
             <img src={youtube} className="fill-current w-6 h-6 mr-2 " alt="icon"/> YouTube
           </button> </a>
           
        :""
       
        } 
        {  
        item.Spotify !== null ?

         <a href={item.Spotify}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={spotify} className="fill-current w-6 h-6 mr-2" alt="icon"/> Spotify
           </button> </a>
        :""
       
        } 
        {  
        item.Netflix !== null ?

         <a href={item.Netflix}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={netflix} className="fill-current w-6 h-6 mr-2" alt="icon"/> Netflix
           </button> </a>
        :""
       
        } 
        {  
        item.Google !== null ?

         <a href={item.Google}> <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2  mt-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={google} className="fill-current w-6 h-6 mr-2" alt="icon"/> Google
           </button> </a>
        :""
       
        } 

      </div>
      <div className="text-left italic text-gray-600 text-xs mt-4">
      {item.BlackOwned !== null ? <p className ="mb-2">*Buy item from Black-Owned/Small businesses</p>: ""}
        {item.Libby !== null ?  <p>**Borrow and read ebooks and audiobooks from your local public library for FREE!</p>: ""}
      </div>
              </div>
                </div>
              </div>

              {/* <div className="flex pt-10">
 
                <a href={item.Link} rel="noreferrer" target="_blank">
                  {" "}
                  <button className="flex  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Go to Website
                  </button>
                </a>
              </div> */}
    
      
      <Recommendation></Recommendation>
      </section>
      <Footer />
    </>
  )
}
//}

export default Details

export const query = graphql`
  query($recordId: String!) {
    allAirtable(
      filter: { table: { eq: "Books" }, recordId: { eq: $recordId } }
    ) {
      nodes {
        id
        recordId
        data {
          Amazon
          Libby
          Google
          Spotify
          Youtube
          BlackOwned
          Name
          Netflix
          Description
          Author
          Date
          Genre
          Publisher
          Rating
          Slug
          Featured
          Image
          Img
        }
        recordId
      }
    }
  }
`
