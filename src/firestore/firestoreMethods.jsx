class FirestoreMethods {
  constructor(firestoreInstance) {
    this.db = firestoreInstance
    this.courseAreaRef = this.db.collection("courseAreas")
    this.courseLevelRef = this.db.collection("courseLevels")
    this.courseRef = this.db.collection("courses")
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
}

export default FirestoreMethods
