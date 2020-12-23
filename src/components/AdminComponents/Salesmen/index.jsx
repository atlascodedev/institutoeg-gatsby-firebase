import { makeStyles } from "@material-ui/core"
import React from "react"
import AdminLayout from "../AdminLayout/Paperbase"
import SalesTable from "./SalesTable"
import SalesCreateCard from "./SalesCreateCard"
import { FirebaseContext } from "../../../context/firebase"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "5em",
  },
}))

function Sales(props) {
  const classes = useStyles()
  const { firestoreMethods } = React.useContext(FirebaseContext)
  const [salesCard, setSalesCard] = React.useState(false)
  const [sales, setSales] = React.useState([])

  const handleSalesCardOpen = () => {
    setSalesCard(true)
  }

  const handleSalesCardClose = () => {
    setSalesCard(false)
  }

  React.useEffect(() => {
    let unsub = firestoreMethods.getSales(salesArray => {
      setSales(salesArray)
    })

    return () => {
      unsub()
    }
  }, [])

  return (
    <AdminLayout>
      <SalesCreateCard
        open={salesCard}
        createSale={firestoreMethods.createSale}
        handleClose={handleSalesCardClose}
      ></SalesCreateCard>
      <div className={classes.root}>
        <SalesTable
          updateSales={firestoreMethods.updateSales}
          deleteSales={firestoreMethods.deleteSalesBatch}
          sales={sales}
          handleOpen={handleSalesCardOpen}
        ></SalesTable>
      </div>
    </AdminLayout>
  )
}

export default Sales
