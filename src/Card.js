import React from "react"
import { Link } from "gatsby"
let star = ""
function Card({
  name,
  bookImage,
  author,
  rating,
  id,
  description,
  genre,
  published,
  date,
}) {
  //console.log("ID ",id)
  return (
    <div class="m-4 mb-10 ">
      <div class="flex">
        <div class="book m-2">
          <img src={bookImage} />
        </div>

        <div className="w-64">
          <div className="w-64 truncate-custom text-xl text-gray-500  mt-8 text-left ml-4">
            {rating}/5
          </div>
          <div className="w-64 truncate-custom text-xl font-extrabold text-gray-700 text-left ml-4 ">
            {name}
          </div>

          <div className="w-64 truncate-custom text-lg text-gray-500 text-left ml-4">
       {author}
          </div>
          <div className="w-64 truncate-custom text-sm text-gray-700 text-left ml-4">
            <span class="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mt-2">
              Biography
            </span>
          </div>

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
