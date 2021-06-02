import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import "./nav.css"
import path from "../../.cache/normalize-page-path"

export default function Nav() {
  const location = useLocation()

  console.log(`location`, location)

  return (
    <nav
      style={{
        marginLeft: `var(--space-md)`,
        marginTop: `var(--space-sm)`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Link
        className={`btn ${location.pathname === "/" && `btn-primary`}`}
        to="/"
      >
        Dishes
      </Link>

      <Link
        className={`btn ${
          location.pathname === "/ingredients" && `btn-primary`
        }`}
        to="/ingredients"
      >
        Ingredients
      </Link>

      <Link
        className={`btn ${
          location.pathname === "/components" && `btn-primary`
        }`}
        to="/components"
      >
        Components
      </Link>

      <Link
        className={`btn ${location.pathname === "/writing" && `btn-primary`}`}
        to="/writing"
      >
        Writing
      </Link>

      <Link
        className={`btn ${location.pathname === "/search" && `btn-primary`}`}
        to="/search"
      >
        Search
      </Link>
    </nav>
  )
}
