import React from 'react'

function Section() {
    return (
    
        // <div class="h-screen pb-2 bg-right bg-cover" 

        // style={{  
        //     backgroundImage: "url(" + "https://res.cloudinary.com/babyhulk/image/upload/v1591075495/hero-image/bg.svg" + ")"}}
        
        // >

        //     </div>


        // https://res.cloudinary.com/babyhulk/image/upload/v1591111034/hero-image/abstract-search.png




<section class="bg-gray-100 py-8">
	<div class="container max-w-5xl mx-auto m-8">
		<div class="w-full mb-4">	
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
	
		<div class="flex flex-wrap">
			<div class="w-5/6 sm:w-1/2 p-6">
				<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Quick agency contact look up</h3>
				<p class="text-gray-600 mb-8">Find contact by state, name, phone number, categories or keywords.<br /><br />
				</p>
				
			</div>
			<div class="w-full sm:w-1/2 p-6">


            <img
              className="w-full sm:h-64 mx-auto"
              src="https://res.cloudinary.com/babyhulk/image/upload/v1591111034/hero-image/abstract-search.png"
            //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Contacts"
            />
			</div>
		</div>
		
		
		<div class="flex flex-wrap flex-col-reverse sm:flex-row">	
			<div class="w-full sm:w-1/2 p-6 mt-6">

            <img
              className="w-full sm:h-64 mx-auto"
              src="https://res.cloudinary.com/babyhulk/image/upload/v1591111355/hero-image/abstract-co-workers.png"
            //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Contacts"
            />
				
			</div>
			<div class="w-full sm:w-1/2 p-6 mt-6">
				<div class="align-middle">
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Accurate Data </h3>
					<p class="text-gray-600 mb-8">Agency information stored in an up-to-date central repository information to ensure accuracy.<br /><br />
					</p>
				</div>
			</div>

		</div>
	</div>
</section>



    )
}

export default Section
