import * as React from "react"
import { Link } from "gatsby"

import useSiteMetadata from "../hooks/use-site-metadata"

export default function Header() {
  const { title, description } = useSiteMetadata()

  return (
    <header
      style={{
        padding: `var(--space-md)`,
      }}
    >
      <Link to="/">
        <h1 className="title" style={{ margin: 0 }}>
          {title}
        </h1>
      </Link>
      <small>{description}</small>
    </header>
  )
}
