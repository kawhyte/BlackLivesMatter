import React from "react"
import { Link } from "gatsby"

import arrow  from "../img/icons8-forward-small.png"
let itemToRender = ""
let bgColor = ""
let categoriesToRender = []

function CreatePageSection({ business, renderDetails, showlinks }) {

  //get categories
  business.map((label, i) => {
    if (!categoriesToRender.includes(label.props.category)) {
      categoriesToRender.push(label.props.category)
    }
    return categoriesToRender
  })
  

  let newCat = categoriesToRender.map((item, i) => {
    if (renderDetails) {
      if (i % 2 === 0) {
        bgColor = "bg-white"
      } else {
        bgColor = "bg-white"
      }
    } else {
      bgColor = "bg-white"
    }

    let links = item.toLowerCase()

    itemToRender = business.filter(card => {
      return card.props.category.includes(item)
    })



    if (item !== null) {
      if (itemToRender.length > 0 && renderDetails) {
        return (
          <div key= {itemToRender.recordId}>
            <div
              
              className={
                "flex container flex-wrap justify-between text-2xl pt-12  mx-auto px-6 sm:px-12  flex-col-reverse sm:flex-row " +
                bgColor
              }
            >
              <div className="container flex justify-between items-end"> 
              <p className={"font-medium"}>Featured {item}s</p>
              {showlinks ? (
              <div className="flex"> 
              <p className="text-sm">
                <Link
                  key={business.id}
                  className="text-blue-500 font-medium pr-1"
                  to={`/${links}s`}
                >
                  Explore All {item}s
                </Link>
              </p>
              <img src ={arrow} width="20" height="1"  alt="arrow"/> 
              </div>
              ) : "" }
              </div>
                
              
             
            </div>
            <div key= {itemToRender.recordId}
              className={
                "pl-4  gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  " +
                bgColor
              }
            >
              {itemToRender}
            </div>
          </div>
        )
      } else {
        return (
          <div key= {itemToRender.recordId}
            // className={
            //   "pl-4  gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  " +
            //   bgColor
            // }
          >
            {itemToRender}
          </div>
        )
      }

      // return (
      //    <div>
      //      {(itemToRender.length > 0 && renderDetails) ? (
      //       <div key={business.id}
      //         className={
      //           "mt-10  flex container flex-wrap justify-between text-2xl  mx-auto px-6 sm:px-12  flex-col-reverse sm:flex-row " +
      //           bgColor
      //         }
      //       >
      //         <p  className={"font-bold pb-8 pt-4"}>Featured {item}s</p>
      //         <p  className="text-sm pt-4">
      //           <Link key={business.id} className="text-blue-500" to={`/${links}s`}>
      //             Explore All {item}s
      //           </Link>
      //         </p>
      //       </div>
      //     ) : "text"
      //     }
      //     <div
      //       className={
      //         "pl-4  gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  " +
      //         bgColor
      //       }
      //     >
      //       {itemToRender}
      //     </div>
      //    </div>
      // )
    }
  })

  return <>{newCat}</>
}

export default CreatePageSection
