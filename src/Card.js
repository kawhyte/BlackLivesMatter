import React from "react"

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
}) {
  //  console.log("ID ",rating)
  return (
    <div className="m-4 mb-10 relative hover-trigger">
      <div className="flex flex-col  ">
        <div className="justify-center align-middle flex ">
          <a href={link} target="_blank">
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
              <div className="notbook m-2">
                <img
                  alt="Book cover"
                  src={
                    "https://res.cloudinary.com/babyhulk/image/fetch/w_150,h_220,c_fill,g_face,f_auto/" +
                    bookImage
                  }
                />
              </div>
            )}
          </a>
        </div>
        <div className="w-auto ">
          <a href={link}>
            <div className="w-auto truncate-custom text-xl font-medium	 text-gray-700 text-center  mt-6 ">
              {name}
            </div>
          </a>
          <div class="absolute bg-white border border-grey-100 px-4 py-2 hover-target z-10 truncate-custom h-auto text-left text-sm">
            {description}..
          </div>

          <div className="w-64 truncate-custom text-lg text-gray-500 text-center">
            {author}
          </div>
          <div className="w-64 truncate-custom text-sm text-gray-500 text-center">
            {published}
          </div>
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
