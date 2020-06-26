import React from 'react'
import StartHere from './HomePageComponents/StartHere'




function NewUsers() {
    return (
        <div>


    <section class="bg-gray-100 py-8">
	<div class="container max-w-5xl mx-auto m-8">
		{/* <div class="w-full mb-4">	
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div> */}
	
		<div class="flex flex-col justify-center flex-wrap">
			<div class="p-6">
				<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">New to Race Relations in America?</h3>
				<h3 class="text-3xl text-indigo-800 font-bold leading-none mb-3">Start here</h3>
				<p class="text-gray-600 mb-8">Start with the material below.</p>
			</div>

            <div>

               <StartHere />
            </div>


            {/* <div className=""> 
            <hr class="w-12 h-1 bg-orange-500 rounded-full mt-8 " />
            
            </div> */}
			{/* <div class="w-full sm:w-1/2 p-6">


            <img
              className="w-full sm:h-64 mx-auto"
              src="https://res.cloudinary.com/babyhulk/image/upload/v1591111034/hero-image/abstract-search.png"
            //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Contacts"
            />
			</div> */}
		</div>
		
		

	</div>
</section>

 
        </div>
    )
}

export default NewUsers
