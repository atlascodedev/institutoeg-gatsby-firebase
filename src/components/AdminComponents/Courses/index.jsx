import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"
import Datagrid from "../Datagrid"

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

      <div className={classes.datagrid}>
        <Datagrid></Datagrid>
      </div>
    </AdminLayout>
  )
}

export default Courses
