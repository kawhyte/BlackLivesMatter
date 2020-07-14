import React from "react"
import Card from "../Card"

   export function createCards(newPages, addLabelToCard ) {

  let sortedPages = newPages.sort(function (a, b) {

    let nameA = a.data.Name.toUpperCase(); 
    let nameB = b.data.Name.toUpperCase(); 

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
});
  
        return sortedPages.map((node, i) => (
          <Card
            key={i}
            id={node.id}
            recordId={node.recordId}
            name={node.data.Name}
            bookImage={node.data.Attachments[0].thumbnails.full.url}
            genre={node.data.Genre}
            excerpt ={node.data.Excerpt }
            featured={node.data.Featured}
            author={node.data.Author}
            rating={node.data.Rating}
            description={node.data.Description}
            published={node.data.Publisher}
            date={node.data.Date}
            color={node.data.Color}
            type={node.data.Type}
            link={node.data.Link}
            image={node.data.Image}
            category={node.data.Category}
            slug={node.data.Slug} 
            NewUserItem={node.data.NewUserItem}
            addLabelToCard ={addLabelToCard}
            

            />
        ))
      }

