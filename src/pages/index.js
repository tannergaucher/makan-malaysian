import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticleCard from "../components/article-card"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="">
        {data.allMdx.edges.map(edge => (
          <div key={edge.node.id}>
            <Link to={`${edge.node.fields.slug}`}>
              <ArticleCard
                small={edge.node.fields.contentType}
                title={edge.node.frontmatter.title}
                text={edge.node.frontmatter.description}
              />
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
          fields {
            slug
            contentType
          }
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
