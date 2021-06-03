import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import ArticleCard from "../components/article-card"

import "semantic-styles"

import Layout from "./layout"

const shortcodes = { Link, StaticImage } // Provide common components here

export default function PostLayout({ data: { mdx } }) {
  return (
    <Layout>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <article>
        <ArticleCard
          small={mdx.fields.contentType}
          title={mdx.frontmatter.title}
          text={mdx.frontmatter.description}
        />

        {mdx.frontmatter.mainImage && (
          <div style={{ marginTop: `var(--space-lg)` }}>
            <GatsbyImage
              image={mdx.frontmatter.mainImage.childImageSharp.gatsbyImageData}
              alt={mdx.frontmatter.mainImageCaption}
            />
            <p className="text--sm">{mdx.frontmatter.mainImageCaption}</p>
          </div>
        )}

        <hr className="hr" />

        <div
          className="container"
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
  query PostLayout($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        contentType
      }
      frontmatter {
        title
        description
        mainImageCaption
        mainImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, width: 2000)
          }
        }
      }
    }
  }
`
