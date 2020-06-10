import React from 'react'

function Hero() {
    return (

<main className="bg-white font-montserrat mb-2">

    <header className="h-10 sm:h-20 flex items-center">
     
    </header>
    <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
        <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
            <h1 className="text-4xl lg:text-6xl leading-none mb-4 knockout"><strong className="font-black">Exploring Race & Racism </strong></h1>
            <p className="lg:text-lg mb-4 sm:mb-12">A Repository of Books & Movies on Race and Racism </p>
    
        </div>
        <div className=" w-full sm:w-3/5  ml-2">

        <img
              className=" object-right sm:object-top md:object-right lg:object-bottom xl:object-left "
              src="https://res.cloudinary.com/babyhulk/image/upload/f_auto/v1591813794/hero-image/diversity.png"
            //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
              alt="Showing diversity"
            />

           
        </div>
    </div>
  
</main>

    )
}

export default Hero
