import React from "react"
import { FirebaseContext } from "../../../../context/firebase"
import { FirebaseGlobalContext } from "../../../../context/globalContext"
import AtlasDatagrid from "../../../UtilityComponents/AtlasDatagrid"
import CourseAddMainCard from "./CourseAddMainCard"
import CourseMainUpdateCard from "./CourseAddMainUpdateCard"

function CourseAddMain({ courseAreas, createCourse }) {
  const [data, setData] = React.useState([])
  const [additionalData, setAdditionalData] = React.useState({})

  const { firestoreMethods } = React.useContext(FirebaseContext)

  const gridColumns = [
    { title: "uid", field: "uid", hidden: true },
    { title: "coursePhoto", field: "coursePhoto", hidden: true },
    { title: "courseThumbnail", field: "courseThumbnail", hidden: true },
    { title: "courseSyllabus", field: "courseSyllabus", hidden: true },
    { title: "courseEmec", field: "courseEmec", hidden: true },
    { title: "Nome do curso", field: "courseName" },
    { title: "Área do curso", field: "courseArea" },
    { title: "Nível do curso", field: "courseLevel" },
    { title: "Duração do curso", field: "courseDuration" },
  ]

  const handleUpdateCallback = () => {
    console.log("update callback")
  }

  const handleDeleteCallback = () => {
    console.log("delete callback")
  }

  const handleCreateCallback = () => {
    console.log("create callback")
  }

  React.useEffect(() => {
    let unsub = firestoreMethods.getCourses(courseArray => {
      setData(courseArray)
    })

    return () => {
      unsub()
    }
  }, [])

  console.log(additionalData)

  return (
    <div>
      <AtlasDatagrid
        addDialog={CourseAddMainCard}
        updateDialog={CourseMainUpdateCard}
        dataTitle={"Curso"}
        columns={gridColumns}
        data={data}
        deleteCallback={handleDeleteCallback}
        createCallback={handleCreateCallback}
        updateCallback={handleUpdateCallback}
        createCourse={createCourse}
        additionalData={courseAreas}
      ></AtlasDatagrid>
    </div>
  )
}

export default CourseAddMain
