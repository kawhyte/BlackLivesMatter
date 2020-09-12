require('dotenv').config()

module.exports = {
 siteMetadata: {
    title: "Racial Justice",
    author: "Kenny",
    titleTemplate: "%s · Racial Justice",
    description:"Exploring Racial Justice & Equality. A repository of books, podcasts & movies to learn about Race Relations in America.",
    url: "https://equality.netlify.app", // No trailing slash allowed!
    image: "https://res.cloudinary.com/babyhulk/image/upload/v1595351314/hero-image/race.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@IAmKennyWhyte",
    year:"2020",
    lang: `en`,
    keywords:["Racial Justice","talking to kids about racism","anti-racist reading list", "black owned businesses", "BLM","Racism in America","Racism","Black Lives Matter", "Systemic racism", "Antiracist", "Antiracism"]
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-7700317-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASEID,
            tableName: `Books`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
            // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
             //tableLinks: [`WebLinks`], // optional, for deep linking to records across tables.
            // separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            // separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
         },
          {
             baseId: process.env.AIRTABLE_BASEID,
             tableName: `Business`,
             // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.

          //   tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //   // can leave off queryName, mapping or tableLinks if not needed
          },
          {
             baseId: process.env.AIRTABLE_BASEID,
             tableName: `Person`,
             // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.

          //   tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //   // can leave off queryName, mapping or tableLinks if not needed
          },
          // {
          //    baseId: process.env.AIRTABLE_BASEID,
          //    tableName: `WebLinks`,
          //    //tableLinks: [`Books`], // optional, for deep linking to records across tables.

          // //   tableView: `YOUR_TABLE_VIEW_NAME` // optional
          // //   // can leave off queryName, mapping or tableLinks if not needed
          // }
        ]
      }
    },

    `gatsby-plugin-postcss`
  ]
}
