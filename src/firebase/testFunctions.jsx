import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebase = app.initializeApp()

const db = firebase.firestore()

class FirebaseAuth {
  constructor() {
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  logoutUser = () => {
    this.auth
      .signOut()
      .then(result => {
        console.log(result, "user was logged out")
      })
      .catch(error => {
        console.log(error, "Could not logout user")
      })
  }

  loginUser = (email, password) => {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success, "User was logged in")
      })
      .catch(error => {
        console.log(error)
      })
  }
}

class FirestoreMethods {
  constructor() {
    this.db = db
    this.courseAreaRef = db.collection("courseAreas")
    this.courseLevelRef = db.collection("courseLevels")
    this.courseRef = db.collection("courses")
  }

  getCourseAreas = (callback = null) => {
    let unsub = this.courseAreaRef.onSnapshot(result => {
      result.forEach(doc => {
        console.log(doc.data())
      })

      if (callback) {
        callback()
      }
    })

    return unsub
  }

  getCourseLevels = (callback = null) => {
    let unsub = this.courseLevelRef.onSnapshot(result => {
      result.forEach(doc => {
        console.log(doc.data())
      })

      if (callback) {
        callback()
      }
    })

    return unsub
  }

  getCourses = (callback = null) => {
    let unsub = this.courseRef.onSnapshot(result => {
      result.forEach(doc => {
        console.log(doc.data())
      })

      if (callback) {
        callback()
      }
    })

    return unsub
  }
}
