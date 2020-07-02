import React from "react"
import { Link } from "gatsby"
import noImage from "./img/noPhotoFound.jpg"

function AboutPageCard({ name, born, death, image, link }) {

  console.log("@@@@", image)

  // image === null ? noImage : image
  return (
    // <div class="bg-white overflow-hidden ">
    //   <div className="text-center p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    //     <a href={link} rel="noreferrer" target="_blank" className="">
    //       {/* <img class="rounded-full mx-auto  " src={image} alt={name} /> */}
    //       <p class="pt-2 text-lg font-semibold text-blue-500 ">{name}</p>
    //       <p class="text-sm text-gray-600">
    //         {born} - {death}
    //       </p>
    //     </a>
    //   </div>
    // </div>


    <div
    class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    style={{ height: '15em'  }} 
  >
    {/* <div
      class="absolute left-0 bottom-0 w-full h-full z-10"
      style={{
        backgroundImage:
          "linear-gradient`(180deg,transparent,rgba(0,0,0,.7))",
      }}
    ></div> */}
    <a href={link} rel="noreferrer" target="_blank" className="">
    <img
      src={image === null ? noImage : image}//"https://images.unsplash.com/photo-1590989995665-1815e7b2c42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
      className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      alt={name}
    />
    <div class="p-4 absolute bottom-0 inset-x-0 z-20">
      <h2 class="text-lg font-semibold text-gray-400 leading-tight">
     {name}
           <p class="text-xs text-gray-100">
             {born} - {death}
           </p>
      </h2>
    </div></a>
  </div>

  )
}

export default AboutPageCard
