import React from "react"

function BusinessCard({
  name,
  image,
  author,
  rating,
  color,
  type,
  link,
  id,
  description,
  genre,
  published,
  date,
  category,
  primary_color,
  excerpt 
}) {
  return (
    <>
      <div className="relative hover-trigger max-w-sm rounded   mx-4 mb-8 mt-2 ">
        <a href={link} rel="noreferrer"  target="_blank">
          <img
            className="w-full h-50 object-cover object-center businesscard "
            src={
              "https://res.cloudinary.com/babyhulk/image/fetch/w_376,h_205,c_fill,g_face,f_auto/" +
              image
            }
            alt="Logo"
          />
        </a>
        <div
          className={
            "flex  justify-between items-center px-6 py-1 " + primary_color
          }
        ></div>
        <div className="py-4 px-6">
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="inline-block  px-3 py-1 text-sm font-semibold  mr-2"
          >
            <h1 className="truncate-custom text-blue-500 text-sm md:text-lg font-medium break-words text-left  mt-1 hover:text-blue-300 ">
              {name}
            </h1>
          </a>

          <p className="fade-in p-2 absolute bg-white hover-target  z-10 mt-2 mb-4 h-auto break-words text-sm md:text-md text-gray-600 text-left">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default BusinessCard
