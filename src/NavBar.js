import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          year
          author
        }
      }
      build: allSiteBuildMetadata {
        nodes {
          buildTime(formatString: "dddd, MMMM Do YYYY")
        }
      }
    }
  `)

  return (
    <>
      <nav className="w-full  mx-auto p-2 mt-4 container pr-4">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center justify-center flex-column text-gray-900 no-underline hover:no-underline font-bold text-sm md:text-xl lg:text-xl uppercase"
            href="/"
          >
            <img
              className="h-16 w-16"
              src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Family"
            />
            {/* <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg> */}
            <p>{data.site.siteMetadata.title}</p>
          </a>

          <div className="flex w-2/3 justify-end content-center pl-1">
            <Link
              className={
                "ml-8 font-medium text-gray-900  hover:text-blue-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/books"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500  ">
                Home
              </button>
            </Link>
            <Link
              className={
                "hidden sm:inline-block ml-8 font-medium text-gray-900  hover:text-blue-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/books"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500  ">
                Books
              </button>
            </Link>

            <Link
              className={
                "hidden sm:inline-block ml-6 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/movies"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500 ">
                Movies
              </button>
            </Link>

            <Link
              className={
                "hidden sm:inline-block ml-6 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/podcasts"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500 ">
                Podcasts
              </button>
            </Link>

            <Link
              className={
                "hidden sm:inline-block ml-6 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/business"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500">
                Businesses
              </button>
            </Link>

            {/* <Link
              className={
                "ml-6 font-medium text-gray-900  hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              }
              to="/business"
            >
              <button className="pt-1 text-sm font-medium text-gray-700 hover:text-gray-500">
                About
              </button>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
