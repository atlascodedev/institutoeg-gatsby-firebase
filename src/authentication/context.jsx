import React from "react"
import { FirebaseGlobalContext } from "../context/globalContext"

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseAuthContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  const [auth, setAuth] = React.useState(false)

  let firebaseAuth

  React.useEffect(() => {
    firebaseAuth = firebase.firebaseAuth

    firebaseAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        setAuth(false)
      } else {
        setAuth(true)
      }
    })
  })

  return (
    <FirebaseAuthContext.Provider value={{ auth, firebaseAuth }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}
