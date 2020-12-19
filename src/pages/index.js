import React from "react"
import Benefits from "../components/AppComponents/Benefits"
import LandingHero from "../components/AppComponents/LandingHero"
import AppLayout from "../layouts/AppLayout"
import _ from "lodash"
import LandingCourseSection from "../components/AppComponents/LandingCourseSection"
import { graphql, useStaticQuery } from "gatsby"

function IndexPage(props) {
  return (
    <AppLayout>
      <LandingHero />
      <Benefits />
      <LandingCourseSection />
    </AppLayout>
  )
}

export default IndexPage
