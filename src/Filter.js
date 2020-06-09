import React from "react"

function Filter({ handleInputChange }) {
  return (
    <div className="flex flex-col bg-gray-200 rounded-l-lg rounded-r-lg  max-w-2xl mx-auto relative z-2  mt-8 bg-gradient-search  p-8">
      <div className="block relative ">
        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current text-gray-500"
          >
            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
          </svg>
        </span>
        <input
          type="text"
          aria-label="Search"
          placeholder=" Filter by State or Contact Name "
          onChange={handleInputChange}
          className="appearance-none rounded-r rounded-l bg-gray-200 sm:rounded-l-none  border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-600 text-gray-500 focus:bg-white focus:placeholder-gray-500 focus:text-gray-700 focus:green"
        />
      </div>
{/* 
      <small className=" mt-2 ml-2 sm:mt-2 flex justify-start text-gray-500 leading-relaxed pb-2   sm:ml-16 md:ml-2">
        <label className="" htmlFor="promo">
          Filter by State, Contact Name or Phone Number
        </label>
      </small>  */}
    </div>
  )
}

export default Filter
