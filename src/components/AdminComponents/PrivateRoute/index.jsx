import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const auth = rest.isAuth

  if (!auth && location.pathname !== "/admin/login") {
    navigate("/admin/login")
    return null
  } else if (auth && location.pathname == "/admin/login") {
    navigate("/admin/alunos")
  } 

  return <Component {...rest}></Component>
}

export default PrivateRoute
