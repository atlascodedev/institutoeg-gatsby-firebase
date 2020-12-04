import React from "react"
import { FirebaseGlobalContext } from "./context"
import FirestoreMethods from "./firestoreMethods"

export const FirestoreContext = React.createContext(null)

export const FirestoreContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  const firestoreInstance = firebase.db

  return (
    <FirestoreContext.Provider value={new FirestoreMethods(firestoreInstance)}>
      {props.children}
    </FirestoreContext.Provider>
  )
}
