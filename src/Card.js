import React from "react"

function Card({
  name,
  bookImage,
  contactName,
  label,
  workPhone,
  cellularPhone,
  unemployment,
  withholding,
}) {
  const showPhoneNumber = cellularPhone ? cellularPhone : " invisible"
  const showTaxTypeWithholding = withholding === true ? withholding : " hidden"
  const showTaxTypeUnemployment =
    unemployment === true ? unemployment : " hidden"

  return (
    // <div className="my-10 max-w-sm h-full w-4/5 ml-6 border shadow-lg pb-2 pt-2">
    //   <div className="bg-white rounded overflow-hidden ">
    //     <div className="text-center p-3 ">
    //       <div className="flex items-center">
    //         {/* <img
    //           className="w-12 h-12 rounded-full mr-4 ml-3 rounded border"
    //           src={
    //             "https://res.cloudinary.com/babyhulk/image/upload/w_100,h_100,f_auto/v1584505244/flags/Flag_of_" +
    //             state +
    //             ".svg"
    //           }
    //           alt={"Flag of " + state}
    //         /> */}
    //         <div className="text-sm">
    //           <p className="text-gray-900 text-xl font-semibold">{name}</p>
    //           {/* <p classNameName="">Outdated </p> */}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="">
    //       <div className="px-4 py-2  flex flex-1">
    //         <div className="pl-3">
    //           <p className="text-xs text-gray-500">Name</p>
    //           <p className="text-sm font-medium text-gray-800 leading-none">
    //             {contactName ? contactName : "None"}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="px-4 py-2  flex flex-1">
    //         {/* <div className="text-gray-800 contact-icons">
    //           <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
    //           </div> */}
    //         <div className="pl-3">
    //           <p className="text-xs text-gray-500">Email</p>
    //           <p className="text-sm font-medium text-gray-800 leading-none">
    //             {email ? email : "No email provided"}
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-b pt-1">
    //       <div className="flex pb-1">
    //         <div className="px-4 py-2  flex flex-1">
    //           <div className="pl-3">
    //             <p className="text-xs text-gray-500">Phone</p>
    //             <p className="text-sm font-medium text-gray-800 leading-none">
    //               {workPhone ? workPhone : "None"}
    //             </p>
    //           </div>
    //         </div>

    //         <div className={"px-4 py-2  flex flex-1 " + showPhoneNumber}>
    //           <div className="pl-3 mb-3">
    //             <p className="text-xs text-gray-500">Phone (Alt)</p>
    //             <p className="text-sm font-medium text-gray-800 leading-none">
    //               {cellularPhone ? cellularPhone : "None"}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="p-3 flex ">
    //       <div className={"flex-1 " + showTaxTypeUnemployment}>
    //         {unemployment === true ? (
    //           <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full unemploymentBg text-white">
    //             Unemployment
    //           </div>
    //         ) : (
    //           ""
    //         )}
    //       </div>

    //       <div className={"flex-1 " + showTaxTypeWithholding}>
    //         {withholding === true ? (
    //           <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 withholdingBg text-white rounded-full">
    //             Withholding
    //           </div>
    //         ) : (
    //           ""
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>








 
//     <div class="p-8">
//   <div class="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
//     <div class="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out" style={{backgroundImage: "url(" + bookImage + ")"}}>
    
    
    
//     </div>
//   </div>
//     <p class="font-bold text-lg text-gray-500 absolute z-20 pointer-events-none">
//       Video Graphics
//     </p>
// </div>








<div class="m-6"> 
     <div class='list-inline'>
  <div class='book mb-2'>
    <img src={bookImage} />
  </div>
  <div className="w-40 ">
  <a href="#" class="truncate-custom text-sm text-grey-500">{name}<span className="ml-1">{"(2020)"} </span></a>
    {/* <p className= "text-lg font-semibold text-gray-900 break-words">{name}</p> */}
    {/* <p className="text-gray-700 text-base">author</p>
    <p className="text-gray-700 text-base">desc</p> */}
    {/* <a href="#" class="border-b border-gray-900 pb-2">Learn more</a> */}
  </div>

</div>

</div>

  )
}

export default Card
