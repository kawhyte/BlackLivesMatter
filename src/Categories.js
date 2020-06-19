import React from "react"
import book from "./img/book.png"
import movie from "./img/movie.png"
import podcast from "./img/podcast.png"
import article from "./img/articles.png"
import business from "./img/small-business.png"
import { Link } from "gatsby"
function Categories() {
  return (
    <div className="justify-center mx-auto px-6 pb-6 sm:px-12  sm:flex-row items-center ">
      <div className="mt-20 text-xl flex justify-center font-bold py-2 sm:px-12 items-center">
        Categories
      </div>

      <div className="flex flex-wrap justify-center ">
        <Link to="/books">
          <div class="bg-gray-200 px-2 py-2 m-2 rounded-lg text-center w-56 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110">
            <div class="mb-3">
              <img class="w-auto mx-auto h-12 " src={book} alt="" />
            </div>
            <h2 class="text-md font-medium text-gray-700">Books</h2>
          </div>
        </Link>
        <div class="bg-gray-200 px-2 py-2 m-2 rounded-lg text-center w-56 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110">
        <Link to="/movies">
          <div class="mb-3">
            <img class="w-auto mx-auto h-12  " src={movie} alt="" />
          </div>
          <h2 class="text-md font-medium text-gray-700">
            Movies/Documentaries
          </h2>
          </Link>
        </div>

        <div class="bg-gray-200 px-2 py-2 m-2 rounded-lg text-center w-56 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 ">
        <Link to="/podcasts">
          <div class="mb-3">
            <img class="w-auto mx-auto h-12  " src={podcast} alt="" />
          </div>
          <h2 class="text-md font-medium text-gray-700">Podcasts</h2>
          </Link>
        </div>
        <div class="bg-gray-200 px-2 py-2 m-2 rounded-lg text-center w-56 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 ">
          <div class="mb-3">
            <img class="w-auto mx-auto h-12  " src={article} alt="" />
          </div>
          <h2 class="text-md font-medium text-gray-700">Articles</h2>
        </div>
        <div class="bg-gray-200 px-2 py-2 m-2 rounded-lg text-center w-56 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 ">
          <div class="mb-3">
            <img class="w-auto mx-auto h-12  " src={business} alt="" />
          </div>
          <h2 class="text-md font-medium text-gray-700">Businesses</h2>
        </div>
      </div>
    </div>
  )
}

export default Categories
