const functions = require("firebase-functions")
const app = require("express")()
const admin = require("firebase-admin")
const cors = require("cors")
const request = require("request")
const { default: Axios } = require("axios")

const firebase = admin.initializeApp()

const firestore = firebase.firestore()

if (process.env.NODE_ENV !== "production") {
  firestore.settings({
    host: "localhost:8080",
    ssl: false,
  })
}

app.options("*", cors())

app.get("/", cors(), (req, res, next) => {
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

app.post("/build", cors(), (req, res) => {
  let eventType
  let responseMessage = {
    message: "",
  }

  if (!req.body.token) {
    return res
      .status(401)
      .json({ error: "Request requires an authentication token" })
  }

  if (!req.body.event_type) {
    eventType = "start-example"
    responseMessage.message =
      "Authorization was successful, but you no event type was provided, only the testing build will be triggered"
  } else {
    eventType = req.body.event_type
    responseMessage.message = "Build process started with success"
  }

  Axios.post(
    "https://api.github.com/repos/oparin10/institutoeg-gatsby-firebase/dispatches",
    { event_type: eventType },
    {
      headers: {
        Authorization: `Bearer ${req.body.token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
    }
  )
    .then(result => {
      console.log(result.data)
      res.json(responseMessage).status(200)
    })
    .catch(error => {
      res.json({ error: error, message: error.message }).status(500)
    })
})

exports.api = functions.https.onRequest(app)
