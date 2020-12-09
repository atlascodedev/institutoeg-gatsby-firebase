import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"
import CourseTabs from "./CourseTabs"
import { FirebaseGlobalContext } from "../../../context/globalContext"

const useStyles = makeStyles(theme => ({
  datagrid: {
    padding: "5em",
  },
}))

function Courses(props) {
  const classes = useStyles()
  const { firestoreMethods } = React.useContext(FirebaseGlobalContext)
  const [courseAreas, setCourseAreas] = React.useState({})

  React.useEffect(() => {
    let unsubCourseAreas = firestoreMethods.getCourseAreas(courseAreaArray => {
      setCourseAreas(prevData => ({
        ...prevData,
        courseAreas: courseAreaArray,
      }))
    })

    return () => {
      return unsubCourseAreas
    }
  }, [])

  return (
    <AdminLayout>
      <CourseTabs
        getCourseAreas={firestoreMethods.getCourseAreas}
        getCourseLevels={firestoreMethods.getCourseLevels}
        addCourseLevel={firestoreMethods.addCourseLevel}
        deleteCourseLevel={firestoreMethods.deleteCourseLevel}
        createCourseArea={firestoreMethods.createCourseArea}
        deleteCourseArea={firestoreMethods.deleteCourseArea}
        courseAreas={courseAreas}
      />
    </AdminLayout>
  )
}

export default Courses
