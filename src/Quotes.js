import React from 'react'
import Card from './Card'

function Quotes() {
    return (

            <>
              <div className="">
                <div className="container mx-auto ">
                  <main className=" p-2 ">
                    <div className="text-center break-words mt-2 ">
                      <h1 className="text-xl lg:text-3xl leading-none lg:mb-1  p-2 md:text-2xl lg:mx-20 text-center md:p-12">
                            The goal is to find a way forward to a better tomorrow.
                      </h1>
        
                      {/* The rate at which black Americans are killed by police is more
                        than twice as high as the rate for white Americans.
                        <span className="pr-2 text-xs"> ~ LA Johnson/NPR </span> */}
        
                      {/* <p className="pb-6 text-left break-words">
                        The racial inequality website was made to not only highlight
                        police brutality and racism in America, but also find a way
                        forward to a better tomorrow.
                      </p> */}
                      <div className="lg:mb-8 gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                        {[
                          {
                            author: `Maya Angelou`,
                            quote: `Prejudice is a burden that confuses the past, 
                                    threatens the future, and renders the present inaccessible.`,
                            id: 1,
                          },
                          {
                            author: `Martin Luther King Jr.`,
                            quote: `Darkness cannot drive out darkness; only light can do that. 
                                  Hate cannot drive out hate; only love can do that.`,
                            id: 2,
                          },
                          {
                            author: `James Baldwin`,
                            quote: `Not everything that is faced can be changed, but nothing can be changed until it is faced.`,
                            id: 3,
                          },
                        ].map(card => (
                          <div key= {card.id} className="m-4 pt-4  container mx-auto max-w-screen-md text-gray-900 text-center break-words">
                            <h1 className="text-xl lg:text-2xl leading-none mb-4">
                              <strong className=" text-black font-semibold ">
                                {" "}
                                {card.author}
                              </strong>
                            </h1>
                            <p className=" text-gray-700 border-l-4 border-red-500 pl-4  italic rounded text-left m-4">
                              {card.quote}{" "}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </main>
                </div>
              </div>
        
            </>
          
    )
}

export default Quotes
