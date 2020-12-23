import React from "react"
import Benefits from "../components/AppComponents/Benefits"
import LandingHero from "../components/AppComponents/LandingHero"
import AppLayout from "../layouts/AppLayout"
import _ from "lodash"
import LandingCourseSection from "../components/AppComponents/LandingCourseSection"
import { graphql, useStaticQuery } from "gatsby"
import ContactFormMain from "../components/AppComponents/ContactFormMain"
import { FirebaseContext } from "../context/firebase"

function IndexPage(props) {
  console.log(process.env)

  const firebase = React.useContext(FirebaseContext)

  console.log(firebase)

  const landingRef = React.useRef(null)
  const benefitsRef = React.useRef(null)
  const courseRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const pageRefs = [landingRef, benefitsRef, courseRef, contactRef]

  return (
    <AppLayout refs={pageRefs}>
      <div ref={landingRef}>
        <LandingHero cta={courseRef} />
      </div>
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <div ref={courseRef}>
        <LandingCourseSection />
      </div>
      <div ref={contactRef}>
        <ContactFormMain />
      </div>
    </AppLayout>
  )
}

export default IndexPage
