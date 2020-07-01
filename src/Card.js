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
  excerpt,
  NewUserItem
}) {
console.log("This is it ", excerpt)
  return (
    <div className="relative hover-trigger mb-6">
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
            <h3 className="uppercase truncate-custom text-sm md:text-md font-medium break-words text-gray-700 text-center  mt-6">
              {name}
            </h3>
          </a>
          <div className="fade-in truncate-excerpt h-auto absolute bg-white border border-grey-100 px-4 py-2 hover-target z-10  text-left text-sm rounded ">
            {excerpt}...
          </div>

          <div className=" truncate-custom text-sm md:text-md font-light text-gray-700 text-center">
            {author}
          </div>
          <div className=" truncate-custom text-xs md:text-md text-gray-700 font-light text-center">
          {published}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
