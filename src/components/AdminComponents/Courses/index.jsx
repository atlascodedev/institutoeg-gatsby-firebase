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

  return (
    <AdminLayout>
      <CourseTabs
        getCourseAreas={firestoreMethods.getCourseAreas}
        getCourseLevels={firestoreMethods.getCourseLevels}
        addCourseLevel={firestoreMethods.addCourseLevel}
        deleteCourseLevel={firestoreMethods.deleteCourseLevel}
        createCourseArea={firestoreMethods.createCourseArea}
        deleteCourseArea={firestoreMethods.deleteCourseArea}
      />
    </AdminLayout>
  )
}

export default Courses
