import "fontsource-graduate"

import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import firebaseConfig from "./src/config/firebase.config"
import { FirebaseContext, AuthContextProvider } from "./src/context/firebase"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme/"
import FirestoreMethods from "./src/firebase/firestoreMethods"
import FirebaseAuthMethods from "./src/firebase/firebaseAuthMethods"

const app = firebase.initializeApp(firebaseConfig)

const firestore = app.firestore()
const storage = app.storage()
const auth = app.auth()

if (process.env.NODE_ENV !== "production") {
  firestore.settings({
    host: "localhost:8080",
    ssl: true,
  })

  console.log(
    "Warning: You're running a local instance of Firestore, data will persisted to the database"
  )
}

const LOCAL_STORAGE_LOGIN_KEY = "user_is_logged_in"

const firestoreMethods = new FirestoreMethods(firestore)
const firebaseAuthMethods = new FirebaseAuthMethods(auth, firestore)

const App = ({ root }) => {
  const [isLogged, setIsLogged] = React.useState(
    localStorage.getItem(LOCAL_STORAGE_LOGIN_KEY) === "true"
  )

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      const userLoggedIn = !!user

      localStorage.setItem(
        LOCAL_STORAGE_LOGIN_KEY,
        JSON.stringify(userLoggedIn)
      )

      setIsLogged(userLoggedIn)
    })
  }, [])

  return (
    <FirebaseContext.Provider
      value={{ firestoreMethods, firebaseAuthMethods, storage, isLogged }}
    >
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
    </FirebaseContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => <App root={element}></App>
