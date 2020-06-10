import React from "react"

function Card({
  name,
  bookImage,
  label,
}) {


  return (
<div class="m-6"> 
     <div class='list-inline'>
  <div class='book mb-2'>
    <img src={bookImage} />
  </div>
  <div className="w-40 ">
  <a href="#" class="truncate-custom text-sm text-grey-500">{name}<span className="ml-1">{"(2020)"} </span></a>
    {/* <p className= "text-lg font-semibold text-gray-900 break-words">{name}</p> */}
  </div>

</div>

</div>

  )
}

export default Card
