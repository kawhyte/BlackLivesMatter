

export function filterByTags(data, setActiveButton, setState) {
    return filterValue => {
      const cardsToBeFiltered = data.allAirtable.nodes || []
  
      setActiveButton(filterValue.item)
  
      if (filterValue.item === "VIEW ALL") {
        setState(data.allAirtable.nodes)
  
        return
      }
  
      let cards = cardsToBeFiltered.filter(card => {
        let found = false
  
        if (card.data.Genre !== null) {
          card.data.Genre.forEach(element => {
            if (element.toLowerCase().includes(filterValue.item.toLowerCase())) {
              found = true
            }
          })
        }
  
        return found
      })
      setState(cards)
    }
  }
  