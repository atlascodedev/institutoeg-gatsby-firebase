const functions = require("firebase-functions")
const app = require("express")()
const admin = require("firebase-admin")
const cors = require("cors")

const firebase = admin.initializeApp()

const firestore = firebase.firestore()

if (process.env.NODE_ENV !== "production") {
  firestore.settings({
    host: "localhost:8080",
    ssl: false,
  })
}

app.options("*", cors())

app.get("/", (req, res) => {
  return res.send("Hello from this function")
})

app.get("/courses", (req, res) => {
  firestore
    .collection("courses")
    .get()
    .then(coursesSnapshot => {
      let coursesArray = []

      coursesSnapshot.forEach(coursesRef => {
        coursesArray.push(coursesRef.data())
      })

      return coursesArray
    })
    .then(coursesArrayResult => {
      return res.json(coursesArrayResult).status(200)
    })
    .catch(error => {
      return res.status(400).json({ error: error, message: error.message })
    })
})

app.get("/courseAreas", (req, res) => {
  firestore
    .collection("courseAreas")
    .get()
    .then(courseAreasSnapshot => {
      let courseAreasArray = []

      courseAreasSnapshot.forEach(courseAreaRef => {
        courseAreasArray.push(courseAreaRef.data())
      })

      return courseAreasArray
    })
    .then(courseAreasArrayResult => {
      return res.json(courseAreasArrayResult).status(200)
    })
    .catch(error => {
      return res.status(400).json({ error: error, message: error.message })
    })
})

app.get("/courseLevels", (req, res) => {
  firestore
    .collection("courseLevels")
    .get()
    .then(courseLevelsSnapshot => {
      let courseLevelsArray = []

      courseLevelsSnapshot.forEach(courseLevelRef => {
        courseLevelsArray.push(courseLevelRef.data())
      })

      return courseLevelsArray
    })
    .then(courseLevelsArrayResult => {
      return res.send(courseLevelsArrayResult).status(200)
    })
    .catch(error => {
      return res.status(400).json({ error: error, message: error.message })
    })
})

exports.api = functions.https.onRequest(app)
