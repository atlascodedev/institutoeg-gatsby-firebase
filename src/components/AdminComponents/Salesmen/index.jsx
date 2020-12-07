import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"
import MaterialTable from "../MaterialTable"
import SalesTable from "./SalesTable"

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
        <SalesTable></SalesTable>
      </div>
    </AdminLayout>
  )
}

export default Sales
