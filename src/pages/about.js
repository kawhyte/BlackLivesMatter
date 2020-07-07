import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"

function about() {
  return (
    <div>
      <NavBar />
      <div className="">
        <div class="container mx-auto ">
          {/* <header>
            <h1 className="mt-8 p-4 sm:mt-24 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">About</h1>
          </header> */}
          <main className="mt-8 sm:mt-8 p-2 ">
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

            <div className="px-1 lg:px-0 mt-6 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed ">
              <div className="text-sm pl-0 mb-6 italic rounded text-left">
                The rate at which black Americans are killed by police is more
                than twice as high as the rate for white Americans.
                <span className="pr-2"> ~ LA Johnson/NPR </span>
              </div>
              <p className="pb-6 text-left break-words">
                The racial inequality website was made to not only highlight
                police brutality and racism in America, but also find a way
                forward to a better tomorrow.
              </p>
            </div>
          </main>
        </div>
      </div>

<section className="text-center break-words bg-gray-100 mt-8 ">
    <div className="p-10 gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

      <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className=" text-white font-black "> Martin Luther King Jr.</strong>
          </h1>
          <p className=" text-white border-l-4 border-red-500 pl-4  italic rounded text-left m-4">
          "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that".   </p>
        </div>

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className=" text-white font-black p-2 ">Declaration of Independence</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4 text-6">
          "We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness".
          </p>
        </div>

 

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className="font-black text-white ">Malcolm X</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4">
          "You can't separate peace from freedom because no one can be at peace unless he has his freedom".          </p>
        </div>



        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className="font-black text-white ">Maya Angelou</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4">
          "Prejudice is a burden that confuses the past, threatens the future, and renders the present inaccessible".          </p>
        </div>

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className="font-black text-white ">Rosa Parks</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4">
          "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try".        </p>
        </div>

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className="font-black text-white ">James Baldwin</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4">
          "Not everything that is faced can be changed, but nothing can be changed until it is faced".          </p>
        </div>


        </div>

      </section>


{/* <section className="text-center break-words mt-2 ">
<h1 className="p-4 sm:mt-24 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">Created by Kenny</h1>
<p>Check out my other websites </p>

    <div className="p-10 gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">



      <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className=" text-white font-black "> Martin Luther King Jr.</strong>
          </h1>
          <p className=" text-white border-l-4 border-red-500 pl-4  italic rounded text-left m-4">
          "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that".   </p>
        </div>

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className=" text-white font-black p-2 ">Declaration of Independence</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4 text-6">
          "We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness".
          </p>
        </div>

 

        <div className="m-4 pt-4 bg-gray-800 container mx-auto max-w-screen-md text-gray-900 text-center break-words">
          <h1 className="text-xl lg:text-2xl leading-none mb-4">
            <strong className="font-black text-white ">Malcolm X</strong>
          </h1>

          <p className="border-l-4 text-white border-red-500 pl-4 mb-6 italic rounded text-left m-4">
          "You can't separate peace from freedom because no one can be at peace unless he has his freedom".          </p>
        </div>


        </div>

      </section>

      <section className="mt-6">
   




      </section> */}

      <Footer />
    </div>
  )
}

export default about
