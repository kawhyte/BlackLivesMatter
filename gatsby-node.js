const path = require(`path`);


// exports.createPages = ({ graphql, actions }) => {

//   const { createPage } = actions
//   return new Promise(async resolve => {

//     const result = await graphql(`
//         {
//         allAirtable {
//           edges {
//             node {
//               table
//               recordId
//               data {
//                 Author
//                 Color
//                 Date
//                 Description
//               }
//             }
//           }
//         }
//       }
//     `)
//     // For each path, create page and choose a template.
//     // values in context Object are available in that page's query
//     result.data.allAirtable.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.recordId}`,
//         component: path.resolve(`./src/template/details.js`),
//         context: {
//             recordId: node.recordId,
//         },
//       })
//     });
//     resolve()
//   })
// }


exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query { 
      allAirtable(filter: {table: {eq: "Books"}}) {
        nodes {
          data {
            Image
            Name
            Link
            Description
            Author
            Date
            Genre
            Publisher
            Rating
            Slug
            Featured
          }
          recordId
        }
      }
    }
    `)
//     // For each path, create page and choose a template.
//     // values in context Object are available in that page's query
// console.log("%%%%%%%%data.allAirtable.nodes ", data.allAirtable.nodes[0])
    data.allAirtable.nodes.map(( node ) => {
        
      //const slug = edge.node.fields.slug
      actions.createPage({
        // path: `/${node.recordId}`,
        path: `/${node.data.Slug}`,
        component: require.resolve(`./src/templates/details.js`),
        //context: { slug: slug },
        context: { recordId: node.recordId},
        // recordId: node.recordId,
      })


    })
  }