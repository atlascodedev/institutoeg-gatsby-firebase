import { AppBar } from "@material-ui/core"
import React from "react"
import Footer from "../components/AppComponents/Footer"

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <AppBar />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
