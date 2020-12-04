import React from "react"
import { FirebaseGlobalContext } from "../firebase/globalContext"

export const FirestoreContext = React.createContext(null)

export const FirestoreContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  return (
    <FirestoreContext.Provider value={"butt"}>
      {props.children}
    </FirestoreContext.Provider>
  )
}
