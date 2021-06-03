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
        Recipes
      </Link>

      <Link
        className={`btn ${location.pathname === "/writing" && `btn-primary`}`}
        to="/guide"
      >
        Guide
      </Link>

      <Link
        className={`btn ${location.pathname === "/about" && `btn-primary`}`}
        to="/about"
      >
        About
      </Link>
    </nav>
  )
}
