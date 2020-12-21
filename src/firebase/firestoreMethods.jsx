import { nanoid } from "nanoid"

class FirestoreMethods {
  constructor(firestoreInstance, firestoreNamespace, storageInstance) {
    this.firestoreNamespace = firestoreNamespace
    this.db = firestoreInstance
    this.storage = storageInstance

    this.courseAreaRef = this.db.collection("courseAreas")
    this.courseLevelRef = this.db.collection("courseLevels")
    this.courseRef = this.db.collection("courses")
    this.studentRef = this.db.collection("students")
    this.salesRef = this.db.collection("sales")
  }
  getCourseAreas = (callback = null) => {
    let unsub = this.courseAreaRef.onSnapshot(result => {
      let courseAreaArray = []

      result.forEach(doc => {
        courseAreaArray.push(doc.data())
      })

      if (typeof callback === "function" && callback) {
        callback(courseAreaArray)
      }
    })

    return unsub
  }

  createCourseArea = (courseAreaName, courseAreaLevel) => {
    this.courseAreaRef
      .add({
        uid: nanoid(),
        courseAreaName: courseAreaName,
        courseAreaLevel: courseAreaLevel,
      })
      .then(result => {
        console.log(result, "Success while adding a new course area")
      })
      .catch(error => {
        console.log(
          error,
          "There was an error while trying to create a new course area"
        )
      })
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

  getSales = (callback = null) => {
    let unsub = this.salesRef.onSnapshot(salesSnapshot => {
      let salesArray = []

      salesSnapshot.forEach(sales => {
        salesArray.push(sales.data())
      })

      if (typeof callback === "function" && callback) {
        callback(salesArray)
      }
    })

    return unsub
  }

  createSale = (
    value,
    salesman,
    student,
    course,
    upfrontValue,
    installments
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
        date: this.firestoreNamespace.Timestamp.now(),
      })
      .then(result => {
        console.log(result, "Sale created with success")
      })
      .catch(error => {
        console.error(error, "An erro occured while creating a sale entry")
      })
  }

  deleteSalesBatch = uidArray => {
    uidArray.forEach(uid => {
      this.salesRef
        .where("uid", "==", uid)
        .get()
        .then(salesSnapshot => {
          salesSnapshot.forEach(sale => sale.ref.delete())
        })
        .then(() => {
          console.log("Sale deleted with success")
        })
        .catch(error => {
          console.error(
            error,
            "An error occured while trying to delete a batch of sales entry"
          )
        })
    })
  }

  updateSales = (
    uid,
    value,
    salesman,
    student,
    course,
    upfrontValue,
    installments
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
            })
            .then(() => {
              console.log("Sale entry was updated with success")
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

  deleteCourseLevel = uid => {
    this.courseLevelRef
      .where("uid", "==", uid)
      .get()
      .then(courseLevelSnapshot => {
        courseLevelSnapshot.forEach(courseLevel => {
          courseLevel.ref
            .delete()
            .then(result => {
              console.log(result, "Removed course level with success")
            })
            .catch(error => {
              console.log(
                error,
                "There was an error while trying to remove a course level"
              )
            })
        })
      })
      .catch(error => {
        console.log(
          error,
          "There was an error while trying to fetch the specific course level"
        )
      })
  }

  deleteCourseArea = uid => {
    this.courseAreaRef
      .where("uid", "==", uid)
      .get()
      .then(courseAreaSnapshot => {
        courseAreaSnapshot.forEach(courseArea => {
          courseArea.ref
            .delete()
            .then(result => {
              console.log(result, "Deleted a course area with success")
            })
            .catch(error => {
              console.log(
                error,
                "An error occurred while trying to delete a course area"
              )
            })
        })
      })
      .catch(error => {
        console.log(
          error,
          "An error occurred while trying to fetch a course area"
        )
      })
  }

  getCourses = (callback = null) => {
    let unsub = this.courseRef.onSnapshot(courseSnapshot => {
      let courseArray = []

      courseSnapshot.forEach(course => {
        courseArray.push(course.data())
      })

      if (typeof callback === "function" && callback) {
        callback(courseArray)
      }
    })

    return unsub
  }

  createCourse = (
    courseName,
    courseFullSlug,
    courseSlug,
    courseArea,
    courseLevel,
    courseSyllabus,
    courseEmec,
    courseImage,
    courseDuration,
    courseDescription
  ) => {
    const generatedUID = nanoid()

    this.storage
      .ref()
      .child(
        `images/emec/${courseSlug}-${courseArea}-${courseLevel}-${generatedUID}-emec.png`
      )
      .putString(courseEmec, "data_url")
      .then(imageResultEmec => {
        imageResultEmec.ref
          .getDownloadURL()
          .then(emecDownloadUrl => {
            this.storage
              .ref()
              .child(
                `images/courses/${courseSlug}-${courseArea}-${courseLevel}-${generatedUID}.png`
              )
              .putString(courseImage, "data_url")
              .then(courseImageRef => {
                courseImageRef.ref
                  .getDownloadURL()
                  .then(courseImageDownloadUrl => {
                    this.courseRef
                      .add({
                        uid: generatedUID,
                        courseName: courseName,
                        courseArea: courseArea,
                        courseFullSlug: courseFullSlug,
                        courseSlug: courseSlug,
                        courseLevel: courseLevel,
                        courseDuration: courseDuration,
                        courseDescription: courseDescription,
                        courseImage: courseImageDownloadUrl,
                        courseEmec: emecDownloadUrl,
                        courseSyllabus: courseSyllabus,
                      })
                      .catch(error => console.log(error))
                  })
                  .catch(error => console.log(error))
              })
              .catch(error => console.log(error))
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}

export default FirestoreMethods
