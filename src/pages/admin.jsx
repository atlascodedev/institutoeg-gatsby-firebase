import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import Login from "../components/AdminComponents/Login"
import AdminLayout from "../components/AdminComponents/AdminLayout/Paperbase"

function Admin(props) {
  const isAuth = true

  return (
    <Router>
      <Login path={"/admin/login"} />
      <AdminLayout path={"/admin/dashboard"}></AdminLayout>
    </Router>
  )
}

export default Admin
