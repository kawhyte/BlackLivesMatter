import React from "react"
import "../css/global.css"
import photo from "../img/BLM.jpeg"

const NotFoundPage = () => {
  return (
    <div>
      <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
      </div>

      <div className="container absolute w-screen mx-auto inset-0">
        <div class="flex items-center justify-center h-screen">
          <div class="bg-black text-white font-bold rounded-lg border shadow-lg p-10">
            <h1 class="font-sans text-4xl text-white ">
              <strong>#BlackLivesMatter</strong>
            </h1>
            <p className="mb-5 mt-3"> OOPS! THAT PAGE CAN’T BE FOUND. </p>
            <span class="opacity-50 pr-2">Take me back to</span>
            <a class="border-b " href="/">
              Home
            </a>
          </div>
        </div>
      </div>

      {/* <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to</span>
        <a class="border-b" href="/"> Home
        </a>
      </div> */}
    </div>
  )
}

export default NotFoundPage
