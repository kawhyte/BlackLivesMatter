import React from "react"

function Questions() {
  return (
      <div class= "">
        <div className=" mx-auto container flex justify-center flex-col ">
          <div className="pl-6 pr-6 pt-6">
            <h1 className=" font-medium text-left text-xl text-gray-800 mb-5 mt-4">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="m-2 pl-3 pb-6 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">

          {[
              {
                question:`what is systemic racism? `,
                answer: `Systemic or Institutional racism is a form of racism that is embedded as normal practice within society or an organisation. It can lead to such issues as discrimination in criminal justice, employment, housing, health care, political power, and education, among other issues.`,
                source:`https://en.wikipedia.org/wiki/Institutional_racism`,
                sourceName:`wikipedia.org`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
              {
                question:`how can i support black lives matter? `,
                answer: `internal`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
              {
                question:`How To Be An Ally - What can I do to help?  `,
                answer: `internal`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
              {
                question:`How do I Cope with Racial Trauma?`,
                answer: `internal`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
         
          
              // {
              //   route: `https://www.linkedin.com/in/kawhyte/`,
              //   title: `Contact me`,
              //   type: `external`
              // },
            ].map(card =>
              (
                <section
              class="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
              href="/"
            >
              <div
                class="flex items-center justify-between font-semibold capitalize text-left dark:text-gray-700"
              >
                <span>{card.question}</span>
              </div>

              <p
                class="text-sm font-medium leading-snug text-left
									text-gray-600 my-3"
              >
               {card.answer}
              </p>
             <a
             href={card.source}
             target="_blank"
             rel="noopener noreferrer"
             
             
             ><p class="text-left text-sm mb-3 font-medium leading-snug text-gray-600 "> Source:<span class="ml-2">{card.sourceName} </span></p> </a> 
             {/* <a
             href={card.source}
             target="_blank"
             rel="noopener noreferrer"
             
             
             ><p class="text-left text-sm mb-3">Learn more</p> </a>  */}

        
            </section>
              ) 
            )}




           
           
  
            


          </div>
        
        </div>
      </div>

      
   
  )
}

export default Questions
