import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (true && location.pathname !== "/admin/login") {
    navigate("/admin/login")
    return null
  }

  return <Component {...rest}></Component>
}

export default PrivateRoute
