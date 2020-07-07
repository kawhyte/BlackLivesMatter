import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"

function about() {
  return (
    <div>
      <NavBar />
      <div>
        <div class="max-w-screen-xl mx-auto">
          <header>
            <h1 className="mt-8 sm:mt-24 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">About</h1>
          </header>
          <main className="sm:mt-8 p-2">
            <div
              className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
              style={{ height: "24em" }}
            >
              <div
                className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  backgroundImage:
                    "linear-gradient`(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src="https://images.unsplash.com/photo-1590989995665-1815e7b2c42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                alt="Black Lives Matter"
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  #BlackLivesMatter
                </h2>
              </div>
            </div>

            <div className="px-1 lg:px-0 mt-6 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <div className="text-sm pl-0 mb-6 italic rounded text-left">
                The rate at which black Americans are killed by police is more
                than twice as high as the rate for white Americans.
                <span className="pr-2"> ~ LA Johnson/NPR </span>
              </div>
              <p className="pb-6 text-left break-words">
               
                The racial inequality website was made  to not only highlight police
                brutality and racism in America, but also find a way forward to a
                better tomorrow. To create a nation where we can all say that</p> 
                <p className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded text-left">
                
                  "We hold these truths to be self-evident, that all men are
                  created equal, that they are endowed by their Creator with
                  certain unalienable Rights, that among these are Life, Liberty
                  and the pursuit of Happiness".
                </p>
              
            </div>
          </main>

        </div>
      </div>

      <div className="container mx-auto mt-4 p-4 text-gray-900 text-center break-words">
        
      </div>

      <Footer />
    </div>
  )
}

export default about
