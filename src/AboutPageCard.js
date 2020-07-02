import React from "react"
import { Link } from "gatsby"

function AboutPageCard({ name, born, death, image, link }) {
  return (
    <div class="bg-white overflow-hidden ">
      <div className="text-center p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <a href={link} rel="noreferrer" target="_blank" className="">
          {/* <img class="rounded-full mx-auto  " src={image} alt={name} /> */}
          <p class="pt-2 text-lg font-semibold text-blue-500 ">{name}</p>
          <p class="text-sm text-gray-600">
            {born} - {death}
          </p>
        </a>
      </div>
    </div>

  )
}

export default AboutPageCard
