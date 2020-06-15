import React from "react"
import { Link } from "gatsby"
let star = ""
function Card({
  name,
  bookImage,
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
}) {
  //  console.log("ID ",rating)
  return (
    <div className="m-4 mb-10 relative hover-trigger ">
      <div className="flex ">
        <a href={link}>
          {category === "Book" ? (
            <div className="book m-2 ">
              <img src={bookImage} />
            </div>
          ) : (
            <div className="notbook m-2">
              <img src={bookImage} />
            </div>
          )}
        </a>

        <div className="w-64">
          {/* <div class="flex justify-center">
          <div class="flex items-center mt-1">
            {[...Array(rating)].map((item, i) => {
              if (item !== null) {
                return (
                  <svg
                    class="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                )
              }
            })}
          </div>
        </div>   */}
          <a href={link}>
            <div className="w-64 truncate-custom text-xl font-extrabold text-gray-700 text-left ml-4 mt-8 ">
              {name}
            </div>
          </a>
          <div class="absolute bg-white border border-grey-100 px-4 py-2 hover-target z-10 truncate-custom h-56 text-left">
            {description}
          </div>

          <div className="w-64 truncate-custom text-lg text-gray-500 text-left ml-4">
            {author}
          </div>
          <div className="w-64 truncate-custom text-sm text-gray-500   text-left ml-4">
            {published}
          </div>
          <div className="w-64  text-sm text-gray-500 ">
            <ul className="flex flex-wrap items-center mt-1 mb-2 ml-4">
              {genre.map((label, i) => {
                return (
                  <li key={i}>
                    {" "}
                    <span
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white uppercase last: m-1 mr-0 mr-1 " +
                        color
                      }
                    >
                      {label}
                    </span>{" "}
                  </li>
                )
              })}
            </ul>
          </div>
          {/* <span
              class={
                "inline-block  rounded-full px-4 py-2 text-sm font-semibold text-white mt-2 " +
                color
              }
            >
              {type}
            </span> */}

          {/* <div className="w-64 truncate-custom text-sm text-gray-700 text-left ml-4">
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mt-2">
              Biography
            </span>
          </div> */}

          {/* <div class="flex justify-center">
          <div class="flex items-center mt-1">
            {[...Array(rating)].map((item, i) => {
              if (item !== null) {
                return (
                  <svg
                    class="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                )
              }
            })}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Card
