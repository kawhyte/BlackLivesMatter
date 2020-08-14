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
 <div></div>
 <svg className="fill-current text-gray-800 inline-block h-12 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M1280 30h-27.4c-.4-.2-.9-.1-1.5-.3-1.8.5-2.9-.1-4.6-.2-1.7.1-3.3.3-5 .3-7.2.1-14-.5-21-.6-.6 0-1.1-.1-1.7-.2-4.8-.5-9.6-.5-14.2 0-1.7.2-3.5.4-5.1.3-3.1-.2-6.3 0-9.4 0-4.4 0-8.6-.3-12.9-.2-4.8.1-9-.8-13.8-.5-.2 0-.7-.1-.9-.1-1.5-.3-3.1-.3-5-.2-1.1.1-2.2.1-3.5 0-3.1 0-3.1 0-6.4.4-2-.1-3.9-.4-5.7-.4-2.6 0-2.9-.6-4.6-.8h-.5c-2.4.1-3.9-.2-5.5-.6-1.7-.4-3.7-.6-6.1-.3-.7.1-1.8 0-2.8 0-3.7-.3-7.5-.5-11.2-.8-6.1-.6-11.9-1.1-18-1.7-2.8-.3-5.3-.6-6.8-1.1-2.4.1-4.6.2-6.8.4-2.8-.3-5.5-.7-7-1.4-.4-.2-1.8-.4-2.4-.5-4 .1-7.7.3-11.4.4-.5-.1-1.1-.3-1.8-.4-1.3-.1-2.6-.4-3.7-.3-3.7.2-7 0-10.5-.1-3.7-.1-6.6-.4-9.6-.9-2-.4-4.4-.8-7.5-.4-1.7.2-3.9.1-5.7.2-2.2.1-4.4 0-6.3-.2-1.8-.3-3.5-.4-5.7-.3-2.6.1-4.8 0-6.8-.3-2-.2-4-.4-6.1-.5-1.8-.1-4.2-.1-5.3-.6-1.3-.5-3.3-.6-5.1-.6-2.9 0-5.3-.2-7.5-.6-1.8-.3-3.7-.5-6.1-.4-1.3 0-2.9 0-3.9-.2-2-.4-4.2-.4-6.8-.5-1.8-.8-4.6-1.2-8.6-1-3.3-.4-7.4-.2-10.1-.9-.9-.3-2.9-.3-4.4 0-2.2.3-4.6.3-6.8 0-2.6-.4-5.1-.3-7.7-.1-5.5.5-11 .9-17.1 1-.9 0-1.8.1-2.8.3-2.8.4-5.3.6-8.5.4-2-.1-4.2 0-6.6-.1-2.4.4-4.6.9-8.1.9-.7 0-1.5.1-2 .2-3.3.6-6.8.7-10.5.4-7-.4-14.2-.7-21.3-.9-1.3 0-2.6-.2-3.9-.3-4 .8-8.6.8-13.4.6-3.3-.1-6.6-.5-10.3-.5-1.5 0-3.5-.2-4.6-.6-.6-.2-1.3-.3-2.6-.2h-2.2c-5.3-.8-12-1.1-15.8-2.4-6.1-.2-12-.4-17.6-.6-4.8-.2-9.6-.3-14.3.2-1.1.1-2.8.1-4 0-1.3-.1-2.2-.1-3.3 0-2.8.3-5.3 0-7.5-.4-1.5.2-2.6.4-3.9.6-1.5.1-2.9.3-4.4.3-4.2-.1-8.6-.1-12.9 0-1.5 0-2.8-.1-3.7-.4-2-.6-4.8-.6-7.5-.7-4-.1-8.1-.2-12-.4-2.6-.5-4-1.2-7.7-1.4-2.8.4-5.7.3-8.8.1-1.8-.1-3.3-.3-4.8-.6-1.3-.2-2.6-.6-4-.6-2.8-.1-5.3-.3-6.8-.9-.2.3-.9.2-1.5.2-3.5-.3-7.4-.2-10.8-.6-.9-.2-2.6.1-3.9.1-.7 0-1.5 0-2.2-.1-1.5-.1-2.9-.2-4.6-.3-4.4-.2-8.5-.7-12.1-1.4-.9-.2-2-.4-3.1-.4-2 0-3.7-.3-5.3-.6-2.6-.4-5.1-.8-8.1-1.1-3.9-.4-7.5-.9-12.3-.7-3.1.1-6.4-.6-7-1.3-.4-.7-2-1.1-3.7-1.6-2.4 0-4.6-.1-6.6-.1-3.7 0-7.4-.2-11 .1-3.7.3-7.5.5-11.6.1-1.7-.1-3.5 0-5.5 0-1.5.7-3.5 1.1-6.6 1.1-2.8 0-4.4.4-6.1.8-.9.2-1.7.4-2.6.6-3.3-.3-4.2-.3-8.6 0-.7 0-1.5.1-2.2.1s-1.5.1-2 .2c-2.2.4-4 .8-7 .9-.6 0-1.3.2-1.7.4-.9.3-1.7.6-2.6.8-3.5-.2-6.4 0-9.7.2-5 .2-10.1.2-15.3.3-5 0-10.1 0-14.9-.4-.4 0-.7-.1-1.1-.1-3.7-.1-7.4-.4-10.8.2-.7.1-1.8.1-2.8.2-3.5.3-6.8.4-10.1-.1-4-.6-8.5-.1-12.7 0-.7 0-1.5.2-1.8.3-1.3.5-3.3.5-5.3.5h-3.3c-2.4 1.1-3.5 1.4-8.3 2.2-1.5.2-3.1.4-4.8.6-2.4.3-5 .3-7.5.2-3.1-.1-6.3-.2-9.2-.4-1.3 0-2.8-.1-3.9-.3-2.6-.5-4.8-.6-7.5-.1-1.2.3-3.4.3-3.6.6-.9.6-3.1.7-4.8.9-3.5.6-7.2.9-9.6 1.8-1.3.5-3.3.8-5.1 1.1-2 .4-4 .8-6.3.9-3.3.2-6.1.6-7.7 1.2-1.3 0-2.4 0-3.3.1-1.1.1-2 .3-3.1.4-.9.1-2 0-2.8 0-.9.1-1.5.5-2.4.6-1.7.2-3.5.4-5.3.6-4.2.3-8.6.3-12.5.7-4.8.5-9.4.7-14.3.4h-1.8c-5.1-.3-10.5-.2-15.3-.8-3.1-.5-6.8-.6-10.8-.5-3.3.1-6.6-.1-9.7-.5-1.7-.2-3.5-.5-5.3-.6-2.2-.1-4-.2-5.7-.7-.6-.2-1.8-.3-2.6-.2-3.3.1-6.1-.2-9-.5-2.8-.2-5.1-.5-6.6-1-2.6-.9-6.4-1-10.7-.8-2.6.2-5 .5-6.1 1-.7.4-2.2.6-3.5.8-1.1.2-2.8.3-3.5.5-1.5.4-3.3.5-5 .7-4.2.6-9 .7-13.6.8-7.2.2-14.5.5-21.5-.3-1.7-.2-3.5-.2-5.3.1 0 .7-1.8 1-3.9 1.4-2 .4-3.9.8-6.1 1-3.7.6-6.8 1.3-11 1.8-5.3.6-10.7 1.1-16 1.7-3.9.4-7.5.7-11 1.2-1.3.2-2.9.3-4.4.4-2.6.2-5.7.2-7.9.6-3.3.6-6.6.7-10.5.7-2.4 0-5 .3-7.4.4-3.1.8-7.5.9-11.2 1.5-2.6.4-5.1.4-7.9.2-3.7-.2-7.4-.3-11 0-.9.1-2 .1-2.9 0-4.8-.3-9-.1-12.5.8-.4.1-.9.1-1.5.2-4 .6-9 .7-12.9 1.3-2.4-.1-4.2 0-5.3.6-.2.1-1.5.1-2.2.2-1.1 0-2.6 0-3.5.1l-7.2.3H0"></path></svg>
    <footer className="flex justify-center px-4 bg-gray-800 text-gray-100">
    <div className="container py-6">
          <div className="flex flex-col items-start  mt-0 md:flex-row">
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
