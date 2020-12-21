import React from "react"
import { FirebaseGlobalContext } from "../context/globalContext"

export const FirebaseAuthContext = React.createContext(null)

export const FirebaseAuthContextProvider = props => {
  const firebase = React.useContext(FirebaseGlobalContext)

  const { firebaseAuth } = firebase

  console.log(firebaseAuth.auth)

  const [auth, setAuth] = React.useState(false)

  React.useEffect(() => {
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
