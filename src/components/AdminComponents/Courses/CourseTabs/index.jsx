import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import CourseAddLevel from "../CourseAddLevel"
import CourseAddArea from "../CourseAddArea"
import CourseAddMain from "../CourseAddMain"

function SimpleTabs(props) {
  const { children, value, index, ...other } = props

  return <div>{value === index && <Box p={3}>{children}</Box>}</div>
}

SimpleTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default function CourseTabs({
  addCourseLevel,
  getCourseLevels,
  deleteCourseLevel,
  createCourseArea,
  getCourseAreas,
  deleteCourseArea,
  courseAreas,
  createCourse,
  deleteCourse
}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Níveis de curso" />
          <Tab label="Áreas de curso" />
          <Tab label="Cursos" />
        </Tabs>
      </AppBar>
      <SimpleTabs value={value} index={0}>
        <CourseAddLevel
          getCourseLevels={getCourseLevels}
          addCourseLevel={addCourseLevel}
          deleteCourseLevel={deleteCourseLevel}
        />
      </SimpleTabs>
      <SimpleTabs value={value} index={1}>
        <CourseAddArea
          deleteCourseArea={deleteCourseArea}
          createCourseArea={createCourseArea}
          getCourseLevels={getCourseLevels}
          getCourseAreas={getCourseAreas}
        />
      </SimpleTabs>
      <SimpleTabs value={value} index={2}>
        <CourseAddMain deleteCourse={deleteCourse} courseAreas={courseAreas} createCourse={createCourse} />
      </SimpleTabs>
    </div>
  )
}
