import React from "react"
let itemsToRender = ["VIEW ALL"]
let arrayWithoutDuplicates = []
function Labels(props) {
  const { labels, onClicked } = props

  labels.map((label, i) => {
    if (!itemsToRender.includes(label.data.Genre)) {
      itemsToRender.push(label.data.Genre)
    }
  })

  arrayWithoutDuplicates = itemsToRender
    .flat()
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )

  console.log("#####", arrayWithoutDuplicates)

  return (
    <div>
      <div className="flex  mt-10">
        <span className="text-indigo-600 text-xl mt-10 mr-2 ">
          {" "}
          Filter by Tags:
        </span>
        <ul className="flex flex-wrap justify-center max-w-6xl">
          {arrayWithoutDuplicates.map((item, i) => {
            if (item !== null) {
              return (
                <li key={i}>
                  <button
                    onClick={e => onClicked({ item })}
                    className="mb-20 cursor-pointer m-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded border bg-gray-100  hover:bg-indigo-500 hover:text-white text-gray-700 uppercase"
                  >
                    {item}
                  </button>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default Labels
