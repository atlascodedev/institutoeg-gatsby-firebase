import React from "react"
import { FirebaseGlobalContext } from "./context"
import FirebaseAuthMethods from "./firebaseAuthMethods"

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseAuthContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  const firebaseAuthInstance = firebase.auth
  const firestoreInstance = firebase.db

  const [isAuth, setIsAuth] = React.useState(false)

  firebase.auth.onAuthStateChanged(user => {
    if (user) {
      setIsAuth(true)
      console.log(isAuth)
    } else {
      setIsAuth(false)
      console.log(isAuth)
    }
  })
  return (
    <FirebaseAuthContext.Provider
      value={new FirebaseAuthMethods(firebaseAuthInstance, firestoreInstance)}
    >
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}
