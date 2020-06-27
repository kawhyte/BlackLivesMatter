import React, { useState } from "react"
import Labels from "./Labels"
import { graphql, useStaticQuery } from "gatsby"
import { paginate } from "./common/paginate"
import { createCards } from "./common/createCards"
import { filterByTags } from "./common/filterByTags"
import "./css/global.css"
import CreatePageSection from "./HomePageComponents/CreatePageSection"

const PodcastList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "Books" }
          data: { Category: { eq: "Podcast" } }
        }
        limit: 100
      ) {
        nodes {
          id
          data {
            Slug
            Author
            Color
            Date
            Description
            Genre
            Link
            Name
            Publisher
            Category
            Rating
            Attachments {
              filename
              thumbnails {
                full {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState(data.allAirtable.nodes)
  const [labels] = useState(data.allAirtable.nodes)
  const [activeButton, setActiveButton] = useState("VIEW ALL")

  const [pageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })


  const handleButtonClicked = filterByTags(data, setActiveButton, setState)

  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)

  let podcasts = createCards(newPages)

  return (
    <>
      <Labels
        labels={labels}
        onClicked={handleButtonClicked}
        activeButton={activeButton}
      />
      <CreatePageSection business={podcasts} />
    </>
  )
}

export default PodcastList