import React from "react"
import { FirebaseGlobalContext } from "../firebase/globalContext"

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseAuthContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  return (
    <FirebaseAuthContext.Provider value={"ass"}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}
