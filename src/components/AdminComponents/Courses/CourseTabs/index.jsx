import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import CourseAddLevel from "../CourseAddLevel"

function SimpleTabs(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

SimpleTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   }
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default function CourseTabs({ addCourseLevel, getCourseLevels }) {
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
        />
      </SimpleTabs>
      <SimpleTabs value={value} index={1}>
        Item Two
      </SimpleTabs>
      <SimpleTabs value={value} index={2}>
        Item Three
      </SimpleTabs>
    </div>
  )
}
