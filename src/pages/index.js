import React from "react"
import Benefits from "../components/AppComponents/Benefits"
import LandingHero from "../components/AppComponents/LandingHero"
import AppLayout from "../layouts/AppLayout"

function IndexPage() {
  return (
    <AppLayout>
      <LandingHero />
      <Benefits />
    </AppLayout>
  )
}

export default IndexPage
