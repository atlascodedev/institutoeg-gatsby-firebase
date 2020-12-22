import React from "react"
import Benefits from "../components/AppComponents/Benefits"
import LandingHero from "../components/AppComponents/LandingHero"
import AppLayout from "../layouts/AppLayout"
import _ from "lodash"
import LandingCourseSection from "../components/AppComponents/LandingCourseSection"
import { graphql, useStaticQuery } from "gatsby"
import ContactFormMain from "../components/AppComponents/ContactFormMain"

function IndexPage(props) {
  console.log(process.env)

  return (
    <AppLayout>
      <LandingHero />
      <Benefits />
      <LandingCourseSection />
      <ContactFormMain />
    </AppLayout>
  )
}

export default IndexPage
