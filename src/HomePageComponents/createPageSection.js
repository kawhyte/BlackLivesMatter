import React from "react"
let itemToRender = ""
let bgColor = "bg-blue-100"
let categoriesToRender = []


function CreatePageSection({ business }) {


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
        if (i % 2 === 0) {
          bgColor = "bg-blue-100"
        } else {
          bgColor = "bg-gray-100"
        }

        itemToRender = business.filter(card => {
          return card.props.category.includes(item)
        })

        if (item !== null) {
          return (
            <>
              {itemToRender.length > 0 ? (
                <div
                  key={i}
                  className={
                    "mt-10  flex container flex-wrap justify-between text-2xl  mx-auto px-6 sm:px-12  flex-col-reverse sm:flex-row " +
                    bgColor
                  }
                >
                  <p className={"font-bold pb-8 pt-4"}>{item}</p>
                </div>
              ) : (
                ""
              )}
              <div
                className={
                  "pl-4  gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  " +
                  bgColor
                }
              >
                {itemToRender}
              </div>
            </>
          )
        }
      })}
    </div>
  )
}

export default CreatePageSection
