import React from "react"
import { Link } from "gatsby"

function Card({
  name,
  bookImage,
  author,
  rating,
  color,
  type,
  link,
  id,
  description,
  genre,
  published,
  date,
  category,
  image,
  recordId,
  slug,
  NewUserItem
}) {
  //  console.log("recordId ",recordId)
  //  console.log("slug ",slug)
  return (
    <div className="relative hover-trigger mt-6 mb-6">
      <div className="flex flex-col  ">
        <div className="justify-center align-middle flex ">
        <Link to={`/${slug}`} > 
          {/* <a href="" target="_blank" rel="noreferrer"> */}
            {category === "Book" ? (
              <div className="book m-2">
                <img
                  alt="Book cover"
                  src={
                    "https://res.cloudinary.com/babyhulk/image/fetch/w_150,h_220,c_fill,g_face,f_auto/" +
                    bookImage
                  }
                />
              </div>
            ) : (
              <div className="notbook m-2 ">
                <img
                  alt="Book cover"
                  src={
                    "https://res.cloudinary.com/babyhulk/image/fetch/w_150,h_220,c_fill,g_face,f_auto/" +
                    bookImage
                  }
                />
              </div>
            )}
          {/* </a> */}
          </Link>
        </div>
        <div className=" ">
          <a href={link}>
            <div className=" truncate-custom text-sm md:text-lg font-medium break-words text-gray-700 text-center  mt-6">
              {name}
            </div>
          </a>
          <div className="fade-in h-auto absolute bg-white border border-grey-100 px-4 py-2 hover-target z-10 truncate-custom break-words  text-left text-sm rounded ">
            {description}
          </div>

          <div className=" truncate-custom text-sm md:text-md text-gray-500 text-center">
            {author}
          </div>
          <div className=" truncate-custom text-xs md:text-md text-gray-500 text-center">
            {published}
          </div>
          {/* <div className="flex  mt-3 justify-center"> 
          <button className="flex  text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded">
                  Get item
           </button>
           </div> */}
          {/* <div className="w-64  text-sm text-gray-500 ">
            <ul className="flex flex-wrap items-center  ml-4">
              {genre.map((label, i) => {
                return (
                  <li key={i}>
                    {" "}
                    <span
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white uppercase last: m-1 mr-0 mr-1 " +
                        color
                      }
                    >
                      {label}
                    </span>{" "}
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Card
