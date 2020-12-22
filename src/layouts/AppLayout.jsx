import React from "react"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"

function AppLayout({ children, refs }) {
  return (
    <React.Fragment>
      <Navbar refs={refs} />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
