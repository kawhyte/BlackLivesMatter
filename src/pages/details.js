import React from "react"
// import {Link} from 'gatsby'
import NavBar from "../NavBar"
import Hero from "../Hero"
import Footer from "../Footer"

const Details = props => {
  let item = props.location.state

  if (item !== null) {

    return ("")
      
  } else {
      
 

  return (
    <>
      <NavBar />
      <Hero />
      <section className="flex  flex-wrap justify-center container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
        <div className="px-5 py-24 justify-center  ">
          <div className="container  px-6 px-12  justify-center sm:px-12 flex flex-col sm:flex-row">
            <div className="sm:w-3/5 flex items-center justify-center ">
              <img
                alt="Poster of book or movie"
                className="mr-10  mb-8  object-right  md:object-right lg:object-bottom xl:object-left rounded border border-gray-200"
                src={item.bookImage}
              />
            </div>

            <div className="w-full sm:w-3/5  ml-2">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {item.author}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.name}
              </h1>
              <p className="leading-relaxed text-left">{item.description}</p>
              <div className="flex mb-4 mt-4">
                <span className="flex items-center">
                  <span className="mr-3 text-sm">Rating</span>

                  {[...Array(item.rating)].map((star, i) => {
                    if (star !== null) {
                      return (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current text-gray-700"
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
                  <span className="text-sm text-left">
                    Released by {item.published} on {item.date}
                  </span>

                  <ul className="flex flex-wrap items-center mt-1 mb-2">
                    {item.genre.map((label, i) => {
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
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
}

export default Details
