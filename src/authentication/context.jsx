import React from "react"
import { FirebaseGlobalContext } from "../context/globalContext"

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseAuthContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  const [auth, setAuth] = React.useState(true)

  return (
    <FirebaseAuthContext.Provider value={auth}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}
