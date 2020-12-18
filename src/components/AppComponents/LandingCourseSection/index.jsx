import { Container, Grid, makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { nanoid } from "nanoid"
import _ from "lodash"
import { converToSlug } from "../../../../util_node"
import CourseMenu from "./CourseMenu"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "#FFF",
    textAlign: "center",
  },

  courseLevelsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    fontSize: "1.1rem",
    fontFamily: theme.typography.fontFamily,
    paddingTop: "3em",
    paddingBottom: "3em",
  },

  courseAreasContainer: {
    color: theme.palette.secondary.main,
    fontSize: "0.9rem",
  },

  courseSectionTitle: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    textAlign: "center",
    paddingTop: "0.9em",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
}))

function LandingCourseSection({ courseAreas }) {
  const classes = useStyles()

  const courseData = useStaticQuery(graphql`
    query courseQuery {
      allCourse {
        edges {
          node {
            courseArea
            courseName
            courseLevel
            courseImage
            courseDescription
          }
        }
      }
    }
  `)

  const coursePos = courseData.allCourse.edges.filter((edge, index) => {
    if (edge.node.courseLevel == "Pós-graduação") {
      return edge.node
    }
  })

  const courseExt = courseData.allCourse.edges.filter((edge, index) => {
    if (edge.node.courseLevel == "Extensão") {
      return edge.node
    }
  })

  const courseGrad = courseData.allCourse.edges.filter((edge, index) => {
    if (edge.node.courseLevel == "Graduação") {
      return edge.node
    }
  })

  const courseMulti = courseData.allCourse.edges.filter((edge, index) => {
    if (edge.node.courseLevel == "Multidisciplinar") {
      return edge.node
    }
  })

  console.log(coursePos)
  console.log(courseExt)
  console.log(courseGrad)
  console.log(courseMulti)

  return (
    <div className={classes.root}>
      <h1 className={classes.courseSectionTitle}>Cursos </h1>

      <div className={classes.courseLevelsContainer}>
        {coursePos.length > 0 ? (
          <div>
            <h3>{coursePos[0].node.courseLevel}</h3>
            <CourseMenu />
          </div>
        ) : null}

        {courseExt.length > 0 ? (
          <div>
            <h3>{courseExt[0].node.courseLevel}</h3>
            <CourseMenu />
          </div>
        ) : null}

        {courseGrad.length > 0 ? (
          <div>
            <h3>{courseGrad[0].node.courseLevel}</h3>
            <CourseMenu />
          </div>
        ) : null}

        {courseMulti.length > 0 ? (
          <div>
            <h3>{courseMulti[0].node.courseLevel}</h3>
            <CourseMenu />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default LandingCourseSection
