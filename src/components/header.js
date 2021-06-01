import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      padding: `var(--space-md)`,
    }}
  >
    <Link to="/">
      <h1 className="title" style={{ margin: 0 }}>
        Eat Malaysian Food
      </h1>
    </Link>
    <small>Notes From a Mat Salleh On Cooking Malaysian Cuisine</small>
  </header>
)

export default Header
