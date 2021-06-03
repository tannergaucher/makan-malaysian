import * as React from "react"

import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className="main padding"
        style={{
          marginTop: `var(--space-lg)`,
          marginBottom: `var(--space-lg)`,
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
