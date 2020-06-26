import React from "react"

let arrayWithoutDuplicates = []
function Labels(props) {
  const { labels, onClicked, activeButton } = props
  let itemsToRender = ["VIEW ALL"]
 
 

  labels.map((label, i) => {
    if (!itemsToRender.includes(label.data.Genre)) {
      itemsToRender.push(label.data.Genre)
    }
    return itemsToRender
  })

  arrayWithoutDuplicates = itemsToRender
    .flat()
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
 
  return (
       <section className="h-32 bg-indigo-100  justify-center flex flex-row flex-wrap    rounded-l-lg  rounded-r-lg  max-w-2xl mx-auto z-10  mt-20"
        >
    <div className="flex justify-center ">
      <div className=" mb-16 sm:mt-0 ">
        <ul className="flex flex-wrap justify-center max-w-6xl   p-2 ml-2 mr-2">
          {arrayWithoutDuplicates.map((item, i) => {
            if (item !== null) {
              return (
                <li key={i}>
                  {item === activeButton ? (
                    <button
                      onClick={e => onClicked({ item })}
                      className={
                        "cursor-pointer m-1 text-xs font-semibold inline-block py-1 px-2  rounded border bg-indigo-600  hover:bg-indigo-500 hover:text-white text-white uppercase active:bg-gray-700"
                      }
                    >
                      {item}
                    </button>
                  ) : (
                    <button
                      onClick={e => onClicked({ item })}
                      className={
                        "cursor-pointer m-1 text-xs font-semibold inline-block py-1 px-2  rounded border border-gray-500  hover:bg-indigo-500 hover:text-white text-gray-700 uppercase"
                      }
                    >
                      {item}
                    </button>
                  )}
                </li>
              )
            }
            return ""
          })}
        </ul>
      </div>
    </div>
      </section>
  )
}

export default Labels
