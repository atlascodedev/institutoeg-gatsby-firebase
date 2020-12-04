import React from "react"
import { FirebaseAuthContext } from "../firebase/firebaseAuthContext"
import { FirestoreContext } from "../firebase/firestoreContext"

function IndexPage(props) {
  const firestore = React.useContext(FirestoreContext)
  const auth = React.useContext(FirebaseAuthContext)

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button onClick={auth.logoutUser}>Logout user</button>
      <button onClick={firestore.getCourseAreas}>Get course area</button>
    </div>
  )
}

export default IndexPage
