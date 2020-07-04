import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, keywords, description, image, article, author, url, lang }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title  || data.site.siteMetadata.title + "Equality in America"
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || data.site.siteMetadata.keywords 
        const metaLang = lang || data.site.siteMetadata.lang 

        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle ,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:lang`,
                content: metaLang,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                property: `twitter:creator`,
                content: metaAuthor,
              },
              {
                property: `twitter:title`,
                content: metaTitle,
              },
              {
                property: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

export default SEO

// const SEO = ({ title, description, image, article }) => {
//   const { pathname } = useLocation()
//   const { site } = useStaticQuery(query)

//   const {
//     defaultTitle,
//     titleTemplate,
//     defaultDescription,
//     siteUrl,
//     defaultImage,
//     twitterUsername,
//   } = site.siteMetadata

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     image: `${siteUrl}${image || defaultImage}`,
//     metaKeywords = keywords || ["BLM", "Black Lives Matter"],
//     url: `${siteUrl}${pathname}`,
//   }

//   return (
//     <Helmet title={seo.title} titleTemplate={titleTemplate}

//         htmlAttributes={{
//             lang,
//           }}
//           meta={[
//             {
//               name: `description`,
//               content: metaDescription,
//             },
//             {
//               name: "keywords",
//               content: site.siteMetadata.keywords.join(","),
//             },
//           ]}

//     >
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />

//       {seo.url && <meta property="og:url" content={seo.url} />}

//       {(article ? true : null) && <meta property="og:type" content="article" />}

//       {seo.title && <meta property="og:title" content={seo.title} />}

//       {seo.description && (
//         <meta property="og:description" content={seo.description} />
//       )}

//       {seo.image && <meta property="og:image" content={seo.image} />}

//       <meta name="twitter:card" content="summary_large_image" />

//       {twitterUsername && (
//         <meta name="twitter:creator" content={twitterUsername} />
//       )}

//       {seo.title && <meta name="twitter:title" content={seo.title} />}

//       {seo.description && (
//         <meta name="twitter:description" content={seo.description} />
//       )}

//       {seo.image && <meta name="twitter:image" content={seo.image} />}
//     </Helmet>
//   )
// }

// export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
// }

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   article: false,
//   lang: `en`,
//   meta: [],
// }

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         titleTemplate
//         defaultDescription: description
//         siteUrl: url
//         defaultImage: image
//         twitterUsername
//       }
//     }
//   }
// `

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        keywords
        author
        titleTemplate
        description
        url
        image
        twitterUsername
      }
    }
  }
`
