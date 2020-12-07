import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"

const useStyles = makeStyles(theme => ({
  datagrid: {
    padding: "5em",
  },
}))

function Courses(props) {
  const classes = useStyles()

  return (
    <AdminLayout>
      <div>this is the courses component</div>

      <div className={classes.datagrid}></div>
    </AdminLayout>
  )
}

export default Courses
