import React, { useState, useEffect } from "react"
import Card from "./Card"
import Filter from "./Filter"
import Labels from "./Labels"
import Section from "./Section"
import { graphql, useStaticQuery } from "gatsby"
import Pagination from "./common/pagination"
import { paginate } from "./common/paginate"
import "./css/global.css"

import IdentityModal, {
  useIdentityContext,
  useNetlifyIdentity,
} from "react-netlify-identity-widget"

let returnedState = ""
let returnedName = ""

const CardList = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(limit: 100) {
        nodes {
          data {
            Author
            Date(formatString: "dddd mm yyyy")
            Description
            Genre
            Name
            Publisher
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

 

  const emptyQuery = ""
  debugger
  const [state, setState] = useState(data.allAirtable.nodes)
  const [labels, setlabels] = useState(data.allAirtable.nodes)

  const [pageState, setPageState] = useState({
    bills: data.allAirtable.nodes,
    currentPage: 1,
    pageSize: 100,
  })

  const handleInputChange = event => {
    const query = event.target.value

    // console.log("Query ", query)

    const contactsToBeFiltered = data.allAirtable.nodes || []

    // console.log("contactsToBeFiltered ", contactsToBeFiltered)

    const contacts = contactsToBeFiltered.filter(contact => {
      // if (contact.data.Phone__c_ === null || contact.data.Phone__w_ === null ) {
      //   console.log("RETURNED")
      //   return
      // }
      //  const { State, Contact_Name } = contact.data
      // console.log("contact.data ", contact.data.State)

      // if (contact.data.Phone_2 !== null && contact.data.Phone_2 !== "") {
      //   returnedPhone2 = contact.data.Phone_2.replace(
      //     /[^A-Z0-9]/gi,
      //     ""
      //   ).includes(query.replace(/[^A-Z0-9]/gi, ""))
      // }
      // if (contact.data.Phone_1 !== null && contact.data.Phone_1 !== "") {
      //   returnedPhone1 = contact.data.Phone_1.replace(
      //     /[^A-Z0-9]/gi,
      //     ""
      //   ).includes(query.replace(/[^A-Z0-9]/gi, ""))
      // }

      if (contact.data.Contact_Name !== null) {
        returnedName = contact.data.Contact_Name.toLowerCase().includes(
          query.toLowerCase()
        )
      }
      if (contact.data.State !== null) {
        returnedState = contact.data.State.toLowerCase().includes(
          query.toLowerCase()
        )
      }

      return (
        //returnedPhone2 || returnedPhone1 || returnedName || returnedState
        returnedName || returnedState

        // contact.data.Phone__c_.replace(/[^A-Z0-9]/ig, '').includes(query.replace(/[^A-Z0-9]/ig, ''))

        //||
        //    (legislativeSession.jurisdiction.name && legislativeSession.jurisdiction.name
        //       .toLowerCase()
        //      .includes(query.toLowerCase()))
      )
    })

    setState(
      // query,
      contacts
    )
  }

  const handlePageChange = page => {
    setPageState(prevState => {
      return { ...prevState, currentPage: page }
    })
  }

  const handleButtonClicked = filterValue => {
    const contactsToBeFiltered = data.allAirtable.nodes || []

    if (filterValue.item === "VIEW ALL") {
      setState(data.allAirtable.nodes)
      return
    }

    let contacts = contactsToBeFiltered.filter(contact => {
      let found = false

      if (contact.data.Keywords !== null) {
        contact.data.Keywords.forEach(element => {
          if (element.toLowerCase().includes(filterValue.item.toLowerCase())) {
            found = true
          }
        })
      }

      return found
    })

    // const contacts = contactsToBeFiltered.filter(contact => {
    //   if (contact.data.Keywords !== null) {
    //     returnedState = contact.data.Keywords.toLowerCase().includes(
    //       filterValue.item.toLowerCase()
    //     )

    //   }
    //   return returnedState
    // })
    setState(
      // query,
      contacts
    )
  }

  // console.log("STATE", state)
  const newPages = paginate(state, pageState.currentPage, pageState.pageSize)
  // console.log("NEW PAGES", newPages)

  let component = newPages.map(node => (
    <Card
      key={node.recordId}
      name={node.data.Name}
      bookImage={node.data.Attachments[0].thumbnails.full.url}
      email={node.data.Email}
      workPhone={node.data.Phone_1}
      cellularPhone={node.data.Phone_2}
      unemployment={node.data.Unemployment}
      withholding={node.data.Withholding}
    />
  ))

  const identity = useIdentityContext()

  {
    // if (!identity.isLoggedIn) {
    //   return <Section /> 
    // } else {
      return (
        <>
          <div className="m-6 ">
            <Filter handleInputChange={handleInputChange} />
          </div>

          <div className=" flex justify-center ">
            <Labels labels={labels} onClicked={handleButtonClicked} />
          </div>
          <div className="flex  flex-wrap justify-center m-6 bg-red-500">{component}</div>

          <Pagination
            itemsCount={state.length}
            pageSize={pageState.pageSize}
            onPageChange={handlePageChange}
            currentPage={pageState.currentPage}
          />
        </>
      )
    }
  }
//}

export default CardList
