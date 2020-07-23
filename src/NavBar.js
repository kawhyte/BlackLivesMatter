import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)

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
        <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
          <Link
            className="sm:mb-5  flex items-center justify-center flex-column text-gray-900 no-underline hover:no-underline font-bold text-sm md:text-xl lg:text-xl uppercase"
            to="/"
          >
            <img
              className="ml-6 h-12 w-12"
              src="https://res.cloudinary.com/babyhulk/image/upload/w_48,h_48,f_auto/v1589318555/hero-image/avatar-01.png"
              // src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/fist-01.png"
              alt="Family"
            />
            {/* <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg> */}
            <p className="  text-base sm:text-xl  sm:p-2 ">
              {data.site.siteMetadata.title}
            </p>
          </Link>

          <button
            className="bg-gray-200 hover:bg-gray-400  items-center block px-3 py-2 text-black border border-white rounded md:hidden "
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-5 h-4 fill-current "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            }   md:flex md:items-center w-full md:w-auto bg-gray-100 text-left pl-4  md:text-center md:bg-white mt-5  md:mt-0`}
          >
            {[
              {
                route: `/know-their-names`,
                title: `Know their names`,
                type: `internal`,
              },
              {
                route: `/books`,
                title: `Books`,
                type: `internal`,
              },
              {
                route: `/videos`,
                title: `Videos`,
                type: `internal`,
              },
              {
                route: `/podcasts`,
                title: `Podcasts`,
                type: `internal`,
              },
              {
                route: `/business`,
                title: `Ecommerce Businesses`,
                type: `internal`,
              },
              {
                route: `https://www.kennywhyte.com/`,
                title: `About`,
                type: `external`,
              },
              // {
              //   route: `https://www.linkedin.com/in/kawhyte/`,
              //   title: `Contact me`,
              //   type: `external`
              // },
            ].map(link =>
              link.type === "internal" ? (
                <Link
               
                  className={
                    " font-normal block my-2 text-black no-underline md:inline-block md:mt-0 md:ml-6 hover:text-blue-500 hover:border-blue-500 px-2 "
                  }
                  key={link.title}
                  to={link.route}
                > 
                
                  <button 
                  
                  className= {" pt-1 text-sm font-medium text-gray-700 hover:text-blue-500 " }>
                    {link.title}
                  </button> 
                </Link>
              ) : (
                <a
                  key={link.title}
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal block my-2 text-black no-underline md:inline-block md:mt-0 md:ml-6 hover:text-gray-500 px-2"
                >
                  <button className=" pt-1 text-sm font-medium text-gray-700 hover:text-blue-500 ">
                    {link.title}
                  </button>
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
