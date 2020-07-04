import React from "react"
import { graphql, useStaticQuery,Link } from "gatsby"
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
            <div className="flex flex-col items-start  justify-start mr-8 mb-2">
              <p href="/" className="text-left text-sm text-gray-500 font-bold pb-4 uppercase">
                {data.site.siteMetadata.title}
              </p>
              <Link to="/know-their-names" className="text-left text-gray-400 text-sm py-1">Know their names</Link>
              <Link to="/books" className="text-left text-gray-400 text-sm py-1">Books</Link>
              <Link to="/videos"  className="text-left text-gray-400 text-sm py-1">Videos</Link>
              <Link to="/podcasts"  className="text-left text-gray-400 text-sm py-1">Podcast</Link>
              <Link to="/business"  className="text-left text-gray-400 text-sm py-1">Businesses</Link>
              <Link to="/about"  className="text-left text-gray-400 text-sm py-1">About</Link>

            </div>

            <div className="flex flex-col  md:ml-10">
              <p href="/" className="text-sm font-bold text-gray-500 pb-4 uppercase text-left">
                Resources
              </p>
              <a href="https://nmaahc.si.edu/" className="text-sm text-gray-400 text-left py-1">
                National Museum of African American History & Culture
                </a> 
           


<div className="text-sm text-left py-1 text-gray-400">  
              <span className="pr-2">Illustrations by</span>
            <a
              className=" hover:text-indigo-500"
              href="https://freepik.com/"
            >
              freepik
            </a>
            <span className="hover:text-indigo-500">,</span>
            <a
              className="pl-1  hover:text-indigo-500"
              href="https://icons8.com/"
            >
              icons8
            </a>
            <span className="">,</span>
            <a
              className="pl-1 pr-1 hover:text-indigo-500"
              href="https://codepen.io/rafaelrinaldi/"
            >
              rafaelrinaldi
            </a>
            </div>


            </div>

         

            {/* <OutboundLink 
                  href="https://www.kennywhyte.com/"
                  className="px-4 text-sm text-indigo-300 hover:text-indigo-500"
                >
                  Made with
                  <span className="pr-2 pl-2" role="img" aria-labelledby="">
                    🍕
                  </span>
                  by {data.site.siteMetadata.author}
                </OutboundLink > */}


            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                {/* <a href="https://nmaahc.si.edu/" class="px-4 text-sm hover:text-indigo-500">
                NMAAHC
                </a> */}

            
              </div>
            </div>
          </div>

          <div className=" mt-4 flex justify-center mr-4 text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">



          <OutboundLink 
                  href="https://www.kennywhyte.com/"
                  className="px-4 text-sm text-indigo-300 hover:text-indigo-500"
                >
                  Made with
                  <span className="pr-2 pl-2" role="img" aria-labelledby="">
                    🍕
                  </span>
                  by {data.site.siteMetadata.author}
                </OutboundLink >


          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
