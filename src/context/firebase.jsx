import React from "react"
import { FirebaseAuthContext } from "../authentication/context"
import FirebaseAuthMethods from "../firebase/firebaseAuthMethods"

export const FirebaseContext = React.createContext(null)

export const AuthContext = React.createContext(null)

export const AuthContextProvider = ({ children }) => {
  const firebase = React.useContext(FirebaseContext)

  const firebaseAuth = new FirebaseAuthMethods(
    firebase.auth,
    firebase.firestore
  )

  return (
    <AuthContext.Provider value={{ firebaseAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
