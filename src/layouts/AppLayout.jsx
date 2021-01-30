import React from "react"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"
import WhatsAppButton from "../components/UtilityComponents/WhatsAppButton"

function AppLayout({ children, refs }) {
  return (
    <React.Fragment>
      <Navbar refs={refs} />

      <main>{children}</main>

      <WhatsAppButton />
      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
