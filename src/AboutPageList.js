import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutPageCard from "./AboutPageCard"
import bgSVG from "./img/hideout.svg"
import "./css/global.css"

const AboutPageList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Person" } }
        sort: { order: DESC, fields: data___Death }
      ) {
        nodes {
          id
          recordId
          data {
            Name
            Born
            Death
            Category
            Link
            Img
            Age
          }
        }
      }
    }
  `)

  const [state] = useState(data.allAirtable.nodes)

  let person = state.map((node, i) => (
    <AboutPageCard
      key={i}
      name={node.data.Name}
      image={node.data.Img}
      link={node.data.Link}
      //image={node.data.Attachments[0].thumbnails.full.url}

      // description={node.data.Description}
      born={node.data.Born}
      death={node.data.Death}
      age={node.data.Age}
    />
  ))

  return (
    <>

<section
      className={
        "mb-1 h-56 items-start justify-start flex flex-col  mt-10 sm:mt-10 bg-black px-20  "
      }
      style={{
        // backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        // backgroundImage: `url("${bgSVG}")`,
        // backgroundImage: `url('https://res.cloudinary.com/babyhulk/image/upload/f_auto/v1593312159/Race/bg/bg_2.jpg')`,
        backgroundRepeat: "repeat",
        // backgroundSize: 'cover',
        backgroundPosition: "center",
      }}
    >

      <h1 className="mt-8 sm:mt-16 text-3xl tracking-tight uppercase sm:leading-1 font-extrabold  text-white sm:text-3xl sm:leading-none md:text-5xl">
        Know their <span className="text-yellow-300 ">NAMES </span>
      </h1>
      <h3 className="text-left text-white break-words sm:py-10 sm:pt-4 text-sm tracking-tight leading-1 font-normal  sm:text-md sm:leading-none md:text-lg">
        A non-comprehensive list of black people that have died as a result of
        police brutality and/or racism. There are many, many more.
      </h3>
 </section>
      <div className="p-3 mt-8 gap-4 mx-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {person}
      </div>
     
    </>
  )
}

export default AboutPageList
