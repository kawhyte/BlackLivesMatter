import React from "react"
import { Link } from "gatsby"
import NavBar from "../NavBar"
import Footer from "../Footer"
import { graphql } from "gatsby"
import SEO from "../Seo"
import arrow  from "../img/icons8-back-small.png"
import amazon  from "../img/icons/icons8-amazon-100.png"
import youtube  from "../img/icons/icons8-play-button-100.png"
import netflix  from "../img/icons/icons8-netflix-100-2.png"
import spotify  from "../img/icons/icons8-spotify-100.png"
import indie  from "../img/icons/icons8-for-you-100.png"
import google  from "../img/icons/icons8-google-100.png"
import libby  from "../img//icons/libby.png"

const Details = ({ data }) => {
  let item = data.allAirtable.nodes[0].data

  let ratingNumber = item.Rating

  console.log(item.Amazon)
  console.log(item)

  return (
    <>
    <SEO 
    title = {item.Name}
    image = {item.Image}
    description = {item.Description}
    
    />




{/* <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
   <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={item.Image} alt="bag" />
   <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
         <h2 class="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
         <p class="text-gray-800 font-semibold tracking-tighter">
            only
            <i class="text-gray-600 line-through">60$</i>
            48$
         </p>
      </div>
      <p class="text-sm text-gray-700 mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p>
      <div class="flex items-center justify-end mt-4 top-auto">
         <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
         <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
         <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Publish</button>
      </div>
   </div>
</div> */}









      {/* <div>{item.Name}</div>
    <div>{item.image}</div> */}
      {/* <div>{item.Image}</div> */}
      <NavBar />
      {/* <Hero /> */}
      <section className="flex flex-wrap justify-center container mx-auto px-2 sm:px-2  sm:flex-row mt-24 min-h-screen">
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
                className="mr-10   mb-8  object-right  md:object-right lg:object-bottom xl:object-left rounded border border-gray-200"
                src={item.Image}
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
    
 
                <p className="text-sm text-left border-gray-400 border-b  mt-12"></p>
           

         <div class="flex items-center justify-start mt-8 top-auto">
        {  
        item.BlackOwned !== null ?

         <a href={item.BlackOwned}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={indie} class="fill-current w-6 h-6 mr-2" alt="icon"/> Local shop*
           </button> </a>
        :""
       
        } 
        {  
        item.Libby !== null ?

         <a href={item.Libby}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={libby} class="fill-current w-6 h-6 mr-2" alt="icon"/> Library**
           </button> </a>
        :""
       
        } 
        {  
        item.Amazon !== null ?

         <a href={item.Amazon}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={amazon} class="fill-current w-6 h-6 mr-2" alt="icon"/> Amazon
           </button> </a>
        :""
       
        } 

        {  
        item.Youtube !== null ?

         <a href={item.Youtube}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400">
             <img src={youtube} class="fill-current w-6 h-6 mr-2 " alt="icon"/> YouTube
           </button> </a>
           
        :""
       
        } 
        {  
        item.Spotify !== null ?

         <a href={item.Spotify}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={spotify} class="fill-current w-6 h-6 mr-2" alt="icon"/> Spotify
           </button> </a>
        :""
       
        } 
        {  
        item.Netflix !== null ?

         <a href={item.Netflix}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={netflix} class="fill-current w-6 h-6 mr-2" alt="icon"/> Netflix
           </button> </a>
        :""
       
        } 
        {  
        item.Google !== null ?

         <a href={item.Google}> <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 inline-flex items-center hover:bg-gray-400 ">
             <img src={google} class="fill-current w-6 h-6 mr-2" alt="icon"/> Google
           </button> </a>
        :""
       
        } 

      </div>
      <div className="text-left italic text-gray-600 text-xs mt-4">
      {item.BlackOwned !== null ? <p className ="mb-2">*Buy items from Black-Owned stores</p>: ""}
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
