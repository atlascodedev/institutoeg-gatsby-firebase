import "fontsource-graduate"

import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { FirebaseContext, AuthContextProvider } from "./src/context/firebase"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme/"
import FirestoreMethods from "./src/firebase/firestoreMethods"
import FirebaseAuthMethods from "./src/firebase/firebaseAuthMethods"
import { navigate } from "gatsby"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD9ZRqGumQU0DGAuI7taI4wJTwlv6Z4TjU",
  authDomain: "gnosis-webapp.firebaseapp.com",
  databaseURL: "https://gnosis-webapp.firebaseio.com",
  projectId: "gnosis-webapp",
  storageBucket: "gnosis-webapp.appspot.com",
  messagingSenderId: "832655236514",
  appId: "1:832655236514:web:af31450870ee8d11eaa6fb",
  measurementId: "G-L7QHHFY7C6",
})

const firestore = app.firestore()
const storage = app.storage()
const auth = app.auth()
const firestoreNamespace = firebase.firestore

if (process.env.NODE_ENV !== "production") {
  firestore.useEmulator("localhost", 8080)

  console.log(
    "Warning: You're running a local instance of Firestore, data will persisted to the database"
  )
}

const LOCAL_STORAGE_LOGIN_KEY = "user_is_logged_in"

const firestoreMethods = new FirestoreMethods(
  firestore,
  firestoreNamespace,
  storage
)
const firebaseAuth = new FirebaseAuthMethods(auth, firestore)

const App = ({ root }) => {
  const [isAuth, setAuth] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    })
  })

  return (
    <FirebaseContext.Provider
      value={{
        firestoreMethods,
        firebaseAuth,
        isAuth,
      }}
    >
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
    </FirebaseContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => <App root={element}></App>
