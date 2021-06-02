import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import "semantic-styles"

import Layout from "./layout"

const shortcodes = { Link, StaticImage } // Provide common components here

export default function DishLayout({ data: { mdx } }) {
  return (
    <Layout>
      <article>
        <div>
          {/* {mdx.frontmatter.mainImage && (
            <GatsbyImage
              image={mdx.frontmatter.mainImage.childImageSharp.gatsbyImageData}
            />
          )} */}
          <h2
            className="text--xxxl"
            style={{ marginBottom: `0`, marginTop: 0 }}
          >
            {mdx.frontmatter.title}
          </h2>
          <small>{mdx.frontmatter.description}</small>
          <hr className="hr" />
          {/* {mdx.frontmatter.mainImage && (
            <div style={{ marginTop: `var(--space-lg)` }}>
              <GatsbyImage
                image={
                  mdx.frontmatter.mainImage.childImageSharp.gatsbyImageData
                }
                alt={mdx.frontmatter.mainImageCaption}
              />
              <p className="text--sm">{mdx.frontmatter.mainImageCaption}</p>
            </div>
          )} */}
        </div>
        <div
          className="padding"
          style={{
            marginTop: `var(--space-lg)`,
            marginBottom: `var(--space-lg)`,
          }}
        >
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <hr className="hr" />
        </div>
      </article>
    </Layout>
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
        mainImageCaption
        mainImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
