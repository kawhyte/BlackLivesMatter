import React from "react"

function Questions() {
  return (
      <div className= "">
        <div className=" mx-auto container flex justify-center flex-col ">
          <div className="pl-6 pr-6 pt-6">
            <h1 className="font-medium text-left text-2xl text-gray-800 mb-5 mt-4">
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
                question:`how can i support black lives matter?`,
                answer: `BLM’s #WhatMatters2020 will focus on issues concerning racial injustice, police brutality, criminal justice reform, Black immigration, economic injustice, LGBTQIA+ and human rights, environmental injustice, access to healthcare, access to quality education, and voting rights and suppression.`,
                source:`https://blacklivesmatter.com/what-matters-2020/`,
                sourceName:`blacklivesmatter.com`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
              {
                question:`What is Racial Trauma?`,
                answer: `Racial trauma, a form of race-based stress, refers to People of Color and Indigenous individuals’ (POCI) reactions to dangerous events and real or perceived experiences of racial discrimination. Such experiences may include threats of harm and injury, humiliating and shaming events, and witnessing racial discrimination toward other POCI.`,
                source:`https://psycnet.apa.org/fulltext/2019-01033-001.html`,
                sourceName:`American Psychological Association`,
                link: `/know-their-names`,
                image: `Know their names`,
              },
           
              {
                question:`How To Be An Ally - What can I do to help?  `,
                answer: `LEAP: A Framework for Becoming a Better Ally to Black Employees. L: Listen and learn from your Black colleagues’ experiences. E: Engage with Black colleagues in racially diverse and more casual settings. A: Ask Black employees about their work and their goals. P: Provide your Black colleagues with opportunities, suggestions, encouragement, and general support. `,
                source:`https://hbr.org/2020/07/how-to-be-a-better-ally-to-your-black-colleagues`,
                sourceName:`Harvard Business Review`,
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
              className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
              href="/"
            >
              <div
                className="flex items-center justify-between dark:text-gray-700  uppercase truncate-custom text-sm md:text-md font-semibold break-words text-gray-700 text-center"
              >
                <span>{card.question}</span>
              </div>

              <p className="font-normal leading-snug text-left  my-3  text-sm md:text-md text-gray-700 "
              >
               {card.answer}
              </p>
             <a
             href={card.source}
             target="_blank"
             rel="noopener noreferrer"
             
             
             ><p className="text-left text-sm mb-1 font-light leading-snug text-gray-600 "> Source | More Info:<span className=" text-blue-600 ml-2">{card.sourceName} </span></p> </a> 
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
