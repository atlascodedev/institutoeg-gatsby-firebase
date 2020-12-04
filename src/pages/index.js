import React from "react"
import { FirebaseGlobalContext } from "../firebase/globalContext"

function IndexPage(props) {
  const firebase = React.useContext(FirebaseGlobalContext)

  const firestore = firebase.firestoreMethods

  console.log(firestore)
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
      CLEAN POGU
      {/* <button onClick={auth.logoutUser}>Logout user</button> */}
      <button onClick={firestore.getCourseAreas}>Get course area</button>
    </div>
  )
}

export default IndexPage
