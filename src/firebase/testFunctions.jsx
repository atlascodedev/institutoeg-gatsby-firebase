import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { nanoid } from "nanoid"

const firebase = app.initializeApp()

const db = firebase.firestore()

app.firestore.Timestamp.fromDate()

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
    this.studentRef = this.db.collection("students")
    this.salesRef = this.db.collection("sales")
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

  getStudents = (callback = null) => {
    let unsub = this.studentRef.onSnapshot(result => {
      let studentsArray = []

      result.forEach(doc => {
        studentsArray.push(doc.data())
      })

      if (typeof callback === "function" && callback) {
        callback(studentsArray)
      }
    })

    return unsub
  }

  getCourseLevels = (callback = null) => {
    let unsub = this.courseLevelRef.onSnapshot(courseLevelSnapshot => {
      let courseLevelArray = []

      courseLevelSnapshot.forEach(courseLevel => {
        courseLevelArray.push(courseLevel.data())
      })

      if (typeof callback === "function" && callback) {
        callback(courseLevelArray)
      }
    })

    return unsub
  }

  createStudent = (
    studentName,
    studentLastname,
    studentEmail,
    studentPhone,
    activeCourse,
    studentGender
  ) => {
    this.studentRef
      .add({
        uid: nanoid(),
        studentName: studentName,
        studentLastname: studentLastname,
        studentEmail: studentEmail,
        studentPhone: studentPhone,
        studentGender: studentGender,
        activeCourse: activeCourse,
        createdAt: this.firestoreNamespace.Timestamp.now(),
      })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteStudent = uid => {
    this.studentRef
      .where("uid", "==", uid)
      .get()
      .then(result => {
        result.forEach(doc =>
          doc.ref
            .delete()
            .then(result =>
              console.log(result).catch(error => console.log(error))
            )
        )
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteStudentBatch = uidArray => {
    uidArray.forEach(uid => {
      this.studentRef
        .where("uid", "==", uid)
        .get()
        .then(studentSnapshot => {
          studentSnapshot.forEach(student => student.ref.delete())
        })
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  updateStudent = (
    uid,
    studentName,
    studentLastname,
    studentEmail,
    studentPhone,
    activeCourse,
    studentGender
  ) => {
    this.studentRef
      .where("uid", "==", uid)
      .get()
      .then(studentSnapshot => {
        studentSnapshot.forEach(student => {
          student.ref
            .update({
              studentName: studentName,
              studentLastname: studentLastname,
              studentEmail: studentEmail,
              studentPhone: studentPhone,
              activeCourse: activeCourse,
              studentGender: studentGender,
            })
            .then(result => {
              console.log(result, "updated with success")
            })
            .catch(error => {
              console.error(error, "Error")
            })
        })
      })
      .catch(error => {
        console.error(error, "An error occurred")
      })
  }

  createSale = (
    value,
    salesman,
    student,
    course,
    upfrontValue,
    installments,
    date
  ) => {
    this.salesRef
      .add({
        uid: nanoid(),
        value: value,
        salesman: salesman,
        student: student,
        course: course,
        upfrontValue: upfrontValue,
        installments: installments,
        date: date,
      })
      .then(result => {
        console.log(result, "Sale created with success")
      })
      .catch(error => {
        console.error(error, "An erro occured while creating a sale entry")
      })
  }

  updateSales = (
    uid,
    value,
    salesman,
    student,
    course,
    upfrontValue,
    installments,
    date
  ) => {
    this.salesRef
      .where("uid", "==", uid)
      .get()
      .then(salesSnapshot => {
        salesSnapshot.forEach(sale => {
          sale.ref
            .update({
              value: value,
              salesman: salesman,
              student: student,
              course: course,
              upfrontValue: upfrontValue,
              installments: installments,
              date: date,
            })
            .then(result => {
              console.log(result)
            })
            .catch(error => {
              console.log(error, "There was an error updating a sales entry")
            })
        })
      })
  }

  addCourseLevel = courseLevelName => {
    this.courseLevelRef
      .add({
        uid: nanoid(),
        courseLevelName: courseLevelName,
      })
      .then(result => {
        console.log("Added a course level with success")
      })
      .catch(error => {
        console.log(
          error,
          "There was an error while trying to create a new course level"
        )
      })
  }
}
