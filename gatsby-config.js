require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Media`,
    description: `Media`,
    year:`2020`,
    author: `Kenny`,
    twitter: `@IAmKennyWhyte`,
  },
  plugins: [

    // {
    //   resolve: `gatsby-plugin-netlify-identity`,
    //   options: {
    //     url: `https://agencycontacts.netlify.app` // required!
    //   }
    // },

    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },



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
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.
            // separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            // separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
         },
          {
             baseId: process.env.AIRTABLE_BASEID,
             tableName: `Business`,
                         // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.

          //   tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //   // can leave off queryName, mapping or tableLinks if not needed
          }
        ]
      }
    },

    `gatsby-plugin-postcss`
  ]
}
