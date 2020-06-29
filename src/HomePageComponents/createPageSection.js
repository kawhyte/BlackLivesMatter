import React from "react"
import { Link } from "gatsby"
let itemToRender = ""
let bgColor = "bg-blue-100"
let categoriesToRender = []

function CreatePageSection({ business, renderDetails }) {
  //get categories
  business.map((label, i) => {
    if (!categoriesToRender.includes(label.props.category)) {
      categoriesToRender.push(label.props.category)
    }
    return categoriesToRender
  })

  
  return (
    <div>
      {categoriesToRender.map((item, i) => {

        if (renderDetails) {
          if (i % 2 === 0) {
            bgColor = "bg-blue-100"
          } else {
            bgColor = "bg-gray-100"
          }
        } else {
          bgColor = "bg-white"
        }

        let links = item.toLowerCase()

        itemToRender = business.filter(card => {
          return card.props.category.includes(item)
        })

        if (item !== null) {
          return (
            <>
              {itemToRender.length > 0 && renderDetails ? (
                <div
                  key={i}
                  className={
                    "mt-10  flex container flex-wrap justify-between text-2xl  mx-auto px-6 sm:px-12  flex-col-reverse sm:flex-row " +
                    bgColor
                  }
                >
                  
                  <p className={"font-bold pb-8 pt-4"}>Featured {item}s</p>
                  <p className="text-sm pt-4">
                    <Link className="text-blue-500" to={`/${links}s`}>
                      Explore All {item}s
                    </Link>
                  </p>
                </div>
              ) : (
                ""
              )}
              <div 
                className={ 
                  "pl-4  gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  " +
                  bgColor
                }
              >
                {itemToRender}
              </div>
            </>
          )
        }
        return ""
      })}
    </div>
  )
}

export default CreatePageSection
