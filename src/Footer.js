import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
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
      <footer className="flex justify-center px-4 mt-12 bg-gray-800 text-gray-100">
        <div className="container py-6">
          <div className="flex flex-col items-start  mt-6 md:flex-row">
            <div className="text-base flex flex-col items-start  justify-start mr-8 mb-2">
              <p
                href="/"
                className="text-left  text-gray-500 font-bold pb-4 uppercase"
              >
                {data.site.siteMetadata.title}
              </p>
              <Link
                to="/know-their-names"
                className="text-left text-gray-400  py-1"
              >
                Know their names
              </Link>
              <Link
                to="/books"
                className="text-left text-gray-400  py-1"
              >
                Books
              </Link>
              <Link
                to="/videos"
                className="text-left text-gray-400 py-1"
              >
                Videos
              </Link>
              <Link
                to="/podcasts"
                className="text-left text-gray-400 py-1"
              >
                Podcast
              </Link>
              <Link
                to="/business"
                className="text-left text-gray-400  py-1"
              >
                Businesses
              </Link>
              {/* <Link
                to="/about"
                className="text-left text-gray-400  py-1"
              >
                About
              </Link> */}
            </div>

            <div className="text-base flex flex-col  md:ml-10">
              <p
                href="/"
                className=" font-bold text-gray-500 pb-4 uppercase text-left mt-4 sm:mt-0"
              >
                Learn More
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nmaahc.si.edu/"
                className=" text-gray-400 text-left py-1"
              >
                National Museum of African American History & Culture
              </a>
              <a
                href="https://apedf.org/"
                className=" text-gray-400 text-left py-1"
              >
                African People’s Education and Defense Fund
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blacklivesmatter.com/"
                className=" text-gray-400 text-left py-1"
              >
                BlackLivesMatter movement
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.civilrightsmuseum.org/"
                className=" text-gray-400 text-left py-1"
              >
                Association of African American Museums
              </a>
            </div>
          </div>

          <div className=" text-base mt-8 flex flex-col justify-center mr-4 text-white  sm:text-xs md:text-sm lg:text-sm xl:text-sm">
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kennywhyte.com/"
              className="px-4 mb-2 text-sm text-indigo-500  hover:text-indigo-200 flex flex-col-reverse justify-center"
            >
              <div className="text-gray-400 text-base flex justify-center items-end">
                <img
                  className="h-10 w-10"
                  alt="icon"
                  src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
                />
                <span className="ml-2">
                  Website created by {data.site.siteMetadata.author}{" "}
                </span>
              </div>
            </OutboundLink>

            <div className="text-base py-1 text-gray-400">
              <span className="pr-2">Illustrations from</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-indigo-500"
                href="https://freepik.com/"
              >
                freepik
              </a>
              <span className="hover:text-indigo-500">,</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pl-1  hover:text-indigo-500"
                href="https://icons8.com/"
              >
                icons8
              </a>
              <span className="">,</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pl-1 pr-1 hover:text-indigo-500"
                href="https://codepen.io/rafaelrinaldi/"
              >
                rafaelrinaldi
              </a>
              <span className=""> &</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pl-1 pr-1 hover:text-indigo-500"
                href="https://unsplash.com/s/photos/blm"
              >
                unsplash.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
