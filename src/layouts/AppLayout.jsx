import React from "react"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
