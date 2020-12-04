import React from "react"
import Firebase from "./index"
import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { FirestoreContextProvider } from "./firestoreContext"
import { FirebaseAuthContextProvider } from "./firebaseAuthContext"

export const FirebaseGlobalContext = React.createContext(null)

const FirebaseGlobalContextProvider = props => {
  return (
    <FirebaseGlobalContext.Provider value={new Firebase(app)}>
      {props.children}
    </FirebaseGlobalContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <FirebaseGlobalContextProvider>
      <FirebaseAuthContextProvider>
        <FirestoreContextProvider>{element}</FirestoreContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseGlobalContextProvider>
  )
}
