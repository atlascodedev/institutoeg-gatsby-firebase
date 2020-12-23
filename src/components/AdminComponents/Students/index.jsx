import { makeStyles } from "@material-ui/core"
import React from "react"
import { FirebaseContext } from "../../../context/firebase"
import AdminLayout from "../AdminLayout/Paperbase"
import StudentCreateCard from "./StudentCreateCard"
import StudentTable from "./StudentTable"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "5em",
  },
}))

function Students(props) {
  const classes = useStyles()
  const { firestoreMethods } = React.useContext(FirebaseContext)
  const [students, setStudents] = React.useState([])
  const [createStudentCard, setCreateStudentCard] = React.useState(false)

  const handleCreateStudentCardOpen = () => {
    setCreateStudentCard(true)
  }

  const handleCreateStudentCardClose = () => {
    setCreateStudentCard(false)
  }

  React.useEffect(() => {
    let unsub = firestoreMethods.getStudents(studentsArray => {
      setStudents(studentsArray)
    })

    return () => {
      unsub()
    }
  }, [])

  return (
    <AdminLayout>
      <StudentCreateCard
        open={createStudentCard}
        handleClose={handleCreateStudentCardClose}
        createStudent={firestoreMethods.createStudent}
      ></StudentCreateCard>

      <div className={classes.root}>
        <StudentTable
          updateStudent={firestoreMethods.updateStudent}
          deleteStudent={firestoreMethods.deleteStudentBatch}
          handleOpen={handleCreateStudentCardOpen}
          students={students}
        ></StudentTable>
      </div>
    </AdminLayout>
  )
}

export default Students
