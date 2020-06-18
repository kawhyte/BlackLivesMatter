import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
          year
          author
        }
      }
      build: allSiteBuildMetadata{
        nodes{
          buildTime(formatString:"dddd, MMMM Do YYYY")
        }
      }
    }
  
  `
  
  )

  return (

  //   <div> 
  //     <div>{` `}</div>
  //   <footer className="w-full text-center border-t border-grey p-4 pin-b bg-blue-dark">
  //   <small className="f6 db tc">© {data.site.siteMetadata.year} <b className="ttu">{data.site.siteMetadata.title}</b>., All Rights Reserved</small>
  // </footer>
  // </div>
    <div> 
  <footer className="flex justify-center px-4 mt-4 mb-10 text-gray-900 bg-white">
        <div className="container py-6">
            <div className="flex flex-col items-center justify-center mt-4 mb-2 md:flex-row">
                {/* <div>
                    <a href="https://www.kennywhyte.com/" className="text-xl font-bold">{data.build.nodes[0].buildTime}</a>
                </div> */}
                <div className="flex mt-5 md:m-0 items-center justify-center">
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"> <a href="https://www.kennywhyte.com/" className=" ml-0 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out">Made with 🍕 by {data.site.siteMetadata.author} </a></p>
                    <div className="mx-4">
                   
                   <span className="mr-4 text-gray-700 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"> Website information updated {data.build.nodes[0].buildTime}</span>
                  	</div>
                </div>
            </div>
                <div className="mt-4 flex justify-center mr-4 text-gray-700 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                  <h5 className= "pr-1">Illustrations by</h5> 
                  <a className= "pr-1" href="https://freepik.com/"> freepik </a> 
                  <span className= "pr-1">and</span>
                  <a href="https://icons8.com/"> icons8</a>
                </div>
        </div>
    </footer>
  </div>
  )
}

export default Footer


