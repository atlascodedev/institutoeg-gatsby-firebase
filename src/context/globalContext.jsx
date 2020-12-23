import React from "react"
import Firebase from "../firebase/index"
import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { FirebaseAuthContextProvider } from "../authentication/context"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "../theme"

export const FirebaseGlobalContext = React.createContext(null)

const FirebaseGlobalContextProvider = props => {
  const [firebaseApp, setFirebaseApp] = React.useState("")

  let instance

  const getFirebase = () => {
    if (typeof window !== "undefined") {
      if (instance) return instance

      instance = new Firebase(app)

      return instance
    }

    return null
  }

  React.useEffect(() => {
    setFirebaseApp(new Firebase(app))
  }, [])

  return (
    <FirebaseGlobalContext.Provider value={firebaseApp}>
      {props.children}
    </FirebaseGlobalContext.Provider>
  )
}

const App = ({ root }) => {
  return (
    <FirebaseGlobalContextProvider>
      <FirebaseAuthContextProvider>
        <CssBaseline></CssBaseline>
        <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
      </FirebaseAuthContextProvider>
    </FirebaseGlobalContextProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App root={element}></App>
}
