import React from "react"
import book from "./img/book.png"
import movie from "./img/movie.png"
import podcast from "./img/podcast.png"
import business from "./img/small-business.png"
import { Link } from "gatsby"
function Categories() {
  return (
    <div className="sm:hidden inline-block justify-center mx-auto px-6 pb-1 sm:px-12  sm:flex-row items-center mb-8 ">
      <div className="mt-4 text-xl flex justify-center font-bold py-2 sm:px-12 items-center">
        Categories
      </div>

      <div className="flex flex-wrap justify-center">
        <Link to="/books">
          <div className="flex justify-center  px-2 py-2 m-2 rounded-lg text-center w-40 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110">
            <div className="mb-1">
              <img className="w-auto mx-auto h-8 " src={book} alt="books" />
            </div>
            <h2 className="ml-4 pt-2 text-md font-medium text-gray-700">Books</h2>
          </div>
        </Link>

        <Link to="/movies">
        <div className="flex justify-center px-2 py-2 m-2 rounded-lg text-center w-40 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110">
          <div className="mb-1">
            <img className="w-auto mx-auto h-8  " src={movie} alt="movies" />
          </div>
          <h2 className="ml-4 pt-2 text-md font-medium text-gray-700">
            Movies
          </h2>
        </div>
        </Link>

        <Link to="/podcasts">
        <div className="flex justify-center  px-2 py-2 m-2 rounded-lg text-center w-40 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 ">
          <div className="mb-1">
            <img className="w-auto mx-auto h-8  " src={podcast} alt="podcast" />
          </div>
          <h2 className="ml-4 pt-2 text-md font-medium text-gray-700">Podcasts</h2>
        </div>
          </Link>
    
        <Link to="/business">
        <div className="flex justify-center px-2 py-2 m-2 rounded-lg text-center w-40 transition duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 ">
          <div className="mb-1">
            <img className="w-auto mx-auto h-8  " src={business} alt="business icon" />
          </div>
          <h2 className="ml-4 pt-2 text-md font-medium text-gray-700">Businesses</h2>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Categories
