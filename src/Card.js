import React from "react"
import { Link } from "gatsby"
let star = ""
function Card({ name, bookImage, author, rating }) {
  for (let index = 0; index < rating; index++) {
    star = (
      <svg
        class="w-4 h-4 fill-current text-yellow-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    )
  }

  return (
    <div class="m-6">
      <div class="list-inline">
         
           
        <div class="book mb-2">
          <img src={bookImage} />
        </div>

        <div className="w-40 ">
          <a href="#" class="truncate-custom text-sm text-gray-700">
            {name}
            <span className="ml-1">{"(2020)"} </span>
          </a>
          {/* <p className= "text-sm  font-semibold text-gray-500 break-words"> {author}</p>  */}
        </div>

        <div class="flex justify-center">
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
            {/* <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
