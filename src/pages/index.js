import React from "react"
import Benefits from "../components/AppComponents/Benefits"
import LandingHero from "../components/AppComponents/LandingHero"
import AppLayout from "../layouts/AppLayout"
import _ from "lodash"
import LandingCourseSection from "../components/AppComponents/LandingCourseSection"
import { graphql, useStaticQuery } from "gatsby"

function IndexPage({ data }) {
  const courseLevels = data.allCourseArea.edges.map((edge, index) => {
    return edge.node.courseAreaLevel
  })

  const courseAreas = data.allCourseArea.edges.map((edge, index) => {
    return edge.node
  })

  const courseLevelsUniq = _.uniq(courseLevels)
  const courseAreasUniq = _.uniq(courseAreas)

  return (
    <AppLayout>
      <LandingHero />
      <Benefits />
      <LandingCourseSection
        courseAreas={courseAreas}
        courseLevels={courseLevelsUniq}
      />
    </AppLayout>
  )
}

export default IndexPage

export const CourseQuery = graphql`
  {
    allCourseArea {
      edges {
        node {
          courseAreaLevel
          courseAreaName
        }
      }
    }
  }
`
