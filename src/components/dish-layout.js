import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "semantic-styles"
import Header from "./header"

const shortcodes = { Link } // Provide common components here

export default function DishLayout({ data: { mdx } }) {
  return (
    <div>
      <Header />
      <article>
        <div className="container" style={{ marginTop: `var(--space-md)` }}>
          {mdx.frontmatter.mainImage && (
            <GatsbyImage
              image={mdx.frontmatter.mainImage.childImageSharp.gatsbyImageData}
            />
          )}
          <h2
            className="text--xxxl"
            style={{ marginBottom: `0`, marginTop: `var(--space-lg)` }}
          >
            {mdx.frontmatter.title}
          </h2>
          <small>{mdx.frontmatter.description}</small>
        </div>
        <div className="container" style={{ marginTop: `var(--space-lg)` }}>
          <hr className="hr" />
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <hr className="hr" />
        </div>
      </article>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
`
