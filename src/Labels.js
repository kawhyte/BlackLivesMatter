import React from "react"
let itemsToRender = ["VIEW ALL"]
let arrayWithoutDuplicates = []
function Labels(props) {
  const { labels, onClicked } = props

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
    <div>
      <div className="flex md:mt-6   mt-0  mb-16 sm:mt-0 ">

        <ul className="flex flex-wrap justify-center max-w-6xl bg-gray-200 p-6 ml-6 mr-6">
          {arrayWithoutDuplicates.map((item, i) => {
            if (item !== null) {
              return (
                <li key={i}>
                  <button
                    onClick={e => onClicked({ item })}
                    className=" cursor-pointer m-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded border bg-gray-100  hover:bg-indigo-500 hover:text-white text-gray-700 uppercase"
                  >
                    {item}
                  </button>
                </li>
              )
              
            }
            return ''
          }
          )}
        </ul>
      </div>
    </div>
  )
}

export default Labels
