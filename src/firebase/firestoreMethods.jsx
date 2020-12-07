import { nanoid } from "nanoid"

class FirestoreMethods {
  constructor(firestoreInstance, firestoreNamespace) {
    this.firestoreNamespace = firestoreNamespace
    this.db = firestoreInstance
    this.courseAreaRef = this.db.collection("courseAreas")
    this.courseLevelRef = this.db.collection("courseLevels")
    this.courseRef = this.db.collection("courses")
    this.studentRef = this.db.collection("students")
  }
  getCourseAreas = (callback = null) => {
    let unsub = this.courseAreaRef.onSnapshot(result => {
      result.forEach(doc => {
        console.log(doc.data())
      })

      if (typeof callback === "function" && callback) {
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

      if (typeof callback === "function" && callback) {
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

      if (typeof callback === "function" && callback) {
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
        .then(() => {
          console.log("Deleted with success")
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
}

export default FirestoreMethods
