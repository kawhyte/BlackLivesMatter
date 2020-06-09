import React from 'react'

function Hero() {
    return (

<main className="bg-white font-montserrat">

    <header className="h-10 sm:h-20 flex items-center">
     
    </header>
    <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
        <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
            <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">Agency Contacts</strong> Search</h1>
            <p className="lg:text-lg mb-4 sm:mb-12">Find contact information for Government Agencies in all US states.</p>
            {/* <a href="#" class="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white py-3 px-10 rounded-full">Learn more</a> */}
        </div>
        <div className=" w-full sm:w-3/5">

        <img
              className="w-full"
              src="https://res.cloudinary.com/babyhulk/image/upload/v1591067872/hero-image/contacts.png"
            //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Contacts"
            />

           
        </div>
    </div>
  
</main>


        // <div className="flex py-2 justify-center ">
        //     <div className="p-8 text-center max-w-2xl">
        //         <div className="md:text-3xl text-3xl font-bold">Agency <span className="text-3xl text-indigo-600">Contacts</span> Search</div>
        //         <div className="text-md font-normal text- mt-4"> Find contact information for Government Agencies   in all US states.
        //         </div>
        //     </div>
        // </div>
    )
}

export default Hero
