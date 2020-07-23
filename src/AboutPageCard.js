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
          src={ 
            image === null
              ? noImage
              : image
          }
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          alt={name}
        />
        <div className="absolute bottom-0 inset-x-0 z-20 bg-black">
          <h2 className="text-lg font-semibold text-white leading-tight bg-black pt-1">
            {name}
          </h2>
          <p className="text-xs text-white bg-black pb-1">
            {born ? born + " -" : ""} {death}
          </p>
          {/* <p className="text-md text-pink-100 bg-black opacity-50">
            {born ? age + ` years old` : " "}
          </p> */}
        </div>
      </a>
    </div>
  )
}

export default AboutPageCard
