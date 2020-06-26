import React from "react"

function BusinessCardCategories({business}) {
    
 console.log("$$PROPS ", business)

 const FoodBusinessToRender = business.filter(item => {
    return item.props.category.includes("Food")
  })
  const EtsyBusinessToRender = business.filter(item => {
    return item.props.category.includes("Etsy Sellers")
  })
  const CosmeticsBusinessToRender = business.filter(item => {
    return item.props.category.includes("Cosmetics")
  })
  const HomeBusinessToRender = business.filter(item => {
    return item.props.category.includes("Home & Living")
  })

  return (
    <div>
      {FoodBusinessToRender.length > 0 ? (
        <div className="mt-10 mb-3 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row ">
          <p className="text-md font-bold p-2 ">Food</p>
        </div>
      ) : (
        ""
      )}

      <div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {FoodBusinessToRender}
      </div> 

      {EtsyBusinessToRender.length > 0 ? (
            <div className="mt-10 mb-3 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Etsy Sellers</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {EtsyBusinessToRender}
      </div>


      {CosmeticsBusinessToRender.length > 0 ? (
         <div className="mt-10 mb-3 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Cosmetics</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {CosmeticsBusinessToRender}
      </div>

      {HomeBusinessToRender.length > 0 ? (
         <div className="mt-10 mb-3 flex container flex-wrap justify-between text-xl mb-0 mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row">
         <p className="text-md font-bold p-2 ">Home & Living</p>
       </div>
      ) : (
        ""
      )}

<div className="gap-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HomeBusinessToRender}
      </div>
    </div>
  )
}

export default BusinessCardCategories
