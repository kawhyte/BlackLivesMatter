import React from "react"
let itemToRender = ""
function CreateCategories({ business, categoriesToRender }) {
  console.log("Create Cat props ", business)

  return (
    <div>
      {categoriesToRender.map((item, i) => {
        if (item !== null) {
          return (
            <>
              <div
                key={i}
                className="mt-10 mb-3 flex container flex-wrap justify-between text-xl  mx-auto px-6 sm:px-12  flex-col-reverse sm:flex-row"
              >
                <p className="text-md font-bold p-2 ">{item}</p>
              </div>
              <div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
                {
                  (itemToRender = business.filter(card => {
                    return card.props.category.includes(item)
                  }))
                }
              </div>
            </>
          )
        }
      })}
    </div>
  )
}

export default CreateCategories
