import * as React from "react"

import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="aside-content-grid">
        <aside className="aside">
          <Nav />
        </aside>
        <main
          className="padding"
          style={{
            marginTop: `var(--space-lg)`,
            marginBottom: `var(--space-lg)`,
          }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
