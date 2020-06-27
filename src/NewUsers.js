import React from "react"
import StartHere from "./HomePageComponents/StartHere"

function NewUsers() {
  return (
    <div>
      <section className="bg-gray-100 py-8">
        <div className="">
          {/* <div className="w-full mb-4">	
			<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div> */}

          <div className="flex flex-col justify-center ">
            <div className="p-6">
              <h3 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">
                New to Race Relations in America?
              </h3>
              {/* <h3 className="text-3xl text-indigo-800 font-bold leading-none mb-3">Start here</h3> */}
              <h1 className="text-xl text-indigo-600 mb-5 mt-4">
                Start with these hand picked material
              </h1>
            </div>

            <div>
              <StartHere />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewUsers
