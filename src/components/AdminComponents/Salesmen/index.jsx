import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"
import MaterialTable from "../MaterialTable"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "5em",
  },
}))

function Sales(props) {
  const classes = useStyles()

  return (
    <AdminLayout>
      <div className={classes.root}>
        <MaterialTable></MaterialTable>
      </div>
    </AdminLayout>
  )
}

export default Sales
