import React from "react"
let itemsToRender = ["VIEW ALL"]
let arrayWithoutDuplicates = []
function Labels(props) {
  // console.log("#####", props)

  const { labels, onClicked } = props

  labels.map((label, i) => {
    if (!itemsToRender.includes(label.data.Keywords)) {
      itemsToRender.push(label.data.Keywords)
    }

    //return itemsToRender
  })

  arrayWithoutDuplicates = itemsToRender
    .flat()
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )

  let arra

  return (
    <div className="max-w-2xl">
      <div className="tab overflow-hidden justify-center bg-gray-100 p-3">
        <input
          className="absolute opacity-0 "
          id="tab-multi-one"
          type="checkbox"
          name="tabs"
        />
        <label
          className=" p-5 leading-normal text-indigo-600 text-xl cursor-pointer"
          htmlFor="tab-multi-one"
        >
          Filter by Keyword
        </label>
        <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
          <ul className="flex flex-wrap justify-center max-w-6xl  mt-4 ">
            {arrayWithoutDuplicates.map((item, i) => {
              if (item !== null) {
                return (
                  <li key={i}>
                    <button
                      onClick={e => onClicked({ item })}
                      className="m-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded border hover:bg-indigo-500 hover:text-white text-gray-700 uppercase last:mr-0 mr-1"
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
    </div>
  )
}

export default Labels
