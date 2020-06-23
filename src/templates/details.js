import React from "react"
 import {Link} from 'gatsby'
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"
import { graphql } from 'gatsby'

const Details = ({ data }) => {
  let item = data.allAirtable.nodes[0].data
  console.log("Item ", item)
  // console.log("DATA ", item.Image)

  //if (item !== null) {

    //return ("")
      
  ///} else {
      
 

  return (
    <>
    {/* <div>{item.Name}</div>
    <div>{item.image}</div> */}
    {/* <div>{item.Image}</div> */}
      <NavBar />
      {/* <Hero /> */}
      <section className="flex  flex-wrap justify-center container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
        <div className="px-5 py-24 justify-center  ">
      <div className="text-left mb-6 "><Link to="/"><span className=" mr-3">ᗉ</span>Home</Link></div>
          <div className="container  px-6 px-12  justify-center sm:px-12 flex flex-col sm:flex-row">
            <div className="sm:w-3/5 flex items-center justify-center ">
              <img
                alt="Poster of book or movie"
                className="mr-10  mb-8  object-right  md:object-right lg:object-bottom xl:object-left rounded border border-gray-200"
                src={item.Image}
              />
            </div>

            <div className="w-full sm:w-3/5  ml-2">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase text-left">
                {item.Author}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium text-left">
                {item.Name}
              </h1>
              <h2 className="text-sm title-font text-gray-500  text-left mb-3">
                     {item.Publisher} 
                    {/* on {item.Date} */}
                  </h2>
              <p className="leading-relaxed text-left">{item.Description}</p>
              <div className="flex mb-4 mt-4">
                <span className="flex items-center">
                  <span className="mr-3 text-sm">Rating</span>

                  {[...Array(5)].map((star, i) => {

                    if (star !== null && (item.Rating ) ) {
                     item.Rating--
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
                </span>
              </div>
              <div className="flex mt-6 items-center pb-5 mb-1 ">
                <div className="flex flex-col">
                  {/* <span className="text-sm text-left">
                    Published by {item.Publisher} 
                  
                  </span> */}

                  <ul className="flex flex-wrap items-center mt-1 mb-2">
                    {item.Genre.map((label, i) => {
                      return (
                        <li key={i}>
                          {" "}
                          <span
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white  bg-gray-700 uppercase last: m-1 mr-0 mr-1"
                          >
                            {" "}
                            {label}
                          </span>{" "}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div className="flex pt-10">
                {/* <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span> */}
               <a href = {item.Link} rel="nofollow" target="_blank" >  <button className="flex  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Get item
                </button></a>
            
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer /> 
    </>
  )
}
//}

export default Details


export const query = graphql`
query ($recordId: String!){
  allAirtable(filter: {table: {eq: "Books"}, recordId: {eq: $recordId}}) {
    nodes {
      data {
        Image
        Name
        Link
        Description
        Author
        Date
        Genre
        Publisher
        Rating
        Slug
        Featured
      }
      recordId
    }
  }
}`