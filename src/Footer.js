import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <div>
      <footer className="flex justify-center px-4 mt-12 bg-gray-800 text-gray-100">
        <div className="container py-6">
          <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a href="#" class="text-xl font-bold uppercase">
                {data.site.siteMetadata.title}
              </a>
            </div>
            <div class="flex mt-4 md:m-0">
              <div class="-mx-4">
                <a href="#" class="px-4 text-sm">
                  About
                </a>
                <a href="#" class="px-4 text-sm">
                  Blog
                </a>
                <a href="#" class="px-4 text-sm">
                  News
                </a>
                <a
                  href="https://www.kennywhyte.com/"
                  className="px-4 text-sm text-indigo-300 hover:text-indigo-500"
                >
                  Made with
                  <span className="pr-1 pl-2" role="img" aria-labelledby="">
                    🍕
                  </span>
                  by {data.site.siteMetadata.author}
                </a>
              </div>
            </div>
          </div>

          <div className=" mt-12 flex justify-center mr-4 text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
            <h5 className="pr-2">Illustrations by</h5>
            <a
              className="pr-2 hover:text-indigo-500"
              href="https://freepik.com/"
            >
              freepik
            </a>
            <span className="pr-1 hover:text-indigo-500">+</span>
            <a
              className="pl-1 pr-1 hover:text-indigo-500"
              href="https://icons8.com/"
            >
              icons8
            </a>
            <span className="pl-1 pr-1">+</span>
            <a
              className="pl-1 pr-1 hover:text-indigo-500"
              href="https://codepen.io/rafaelrinaldi/"
            >
              rafaelrinaldi
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
