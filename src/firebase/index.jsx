import config from "../config/firebase.config"
import FirebaseAuthMethods from "./firebaseAuthMethods"
import FirestoreMethods from "./firestoreMethods"

class Firebase {
  constructor(app) {
    app.initializeApp(config)

    this.firestoreNamespace = app.firestore
    this.storage = app.storage()
    this.auth = app.auth()
    this.db = app.firestore()
    this.firestoreMethods = new FirestoreMethods(
      this.db,
      this.firestoreNamespace,
      this.storage
    )
    this.firebaseAuth = new FirebaseAuthMethods(this.auth)

    // if (process.env.NODE_ENV !== "production") {
    //   this.db.settings({
    //     host: "localhost:8080",
    //     ssl: false,
    //   })

    //   console.log(
    //     "Warning: You're now running a local instance of Firestore, data will not be persisted to the database"
    //   )
    // }

    // this.db.enablePersistence({
    //   synchronizeTabs: true,
    // })
  }
}

export default Firebase
