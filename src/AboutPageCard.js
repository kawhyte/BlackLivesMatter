import React, { lazy } from "react"
import noImage from "./img/noPhotoFound.jpg"

function AboutPageCard({ name, born, death, image, link, age }) {
  return (
    <div
      className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      style={{ height: "15em" }}
    >
      <a href={link} rel="noreferrer" target="_blank" className="">
        <img
          src={image === null ? noImage : image}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          alt={name}
        />
        <div className="absolute bottom-0 inset-x-0 z-20 bg-black py-1 flex justify-center">
          <h2 className=" text-sm md:text-lg font-semibold text-white leading-tight bg-black pt-2 mx-2">
            {name}
          </h2>


          {age ? <p className="flex justify-center text-xs md:text-sm text-black mb-2 mt-2 font-medium  mx-2">
          <span className="px-1 bg-yellow-300">   {age + ` y/o` }</span> 
          </p>: " "}
    
        </div>
      </a>
    </div>
  )
}


export default AboutPageCard
