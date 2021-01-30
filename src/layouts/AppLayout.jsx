import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"
import WhatsAppButton from "../components/UtilityComponents/WhatsAppButton"

function AppLayout({ children, refs }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Instituto Educacional Gnosis - Cursos de pós-graduação na área da
          medicina
        </title>
      </Helmet>

      <Navbar refs={refs} />

      <main>{children}</main>

      <WhatsAppButton />
      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
