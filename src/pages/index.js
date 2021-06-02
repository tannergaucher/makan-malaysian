import * as React from "react"
import { Link, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Home" />
      <div
        style={
          {
            // marginTop: `var(--space-lg)`,
            // marginBottom: `var(--space-lg)`,
          }
        }
      >
        {data.allMdx.edges.map(edge => (
          <div key={edge.node.id}>
            <Link to={`/dish/${edge.node.slug}`}>
              {/* <GatsbyImage
                  image={
                    edge.node.frontmatter.mainImage.childImageSharp
                      .gatsbyImageData
                  }
                /> */}
              <div>
                <h2
                  className="text--xxxl"
                  style={{ marginBottom: 0, marginTop: 0 }}
                >
                  {edge.node.frontmatter.title}
                </h2>
                <small>{edge.node.frontmatter.description}</small>
              </div>
            </Link>
            <hr className="hr" />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            description
            mainImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
