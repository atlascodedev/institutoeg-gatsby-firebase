import React, { forwardRef } from "react"
import MaterialTable from "material-table"
import AddBox from "@material-ui/icons/AddBox"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import Check from "@material-ui/icons/Check"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import Clear from "@material-ui/icons/Clear"
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Edit from "@material-ui/icons/Edit"
import FilterList from "@material-ui/icons/FilterList"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Remove from "@material-ui/icons/Remove"
import SaveAlt from "@material-ui/icons/SaveAlt"
import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"
import { Add, Delete, Save } from "@material-ui/icons"
import AlertFlex from "../../../UtilityComponents/AlertFlex"
import ConfirmationDialog from "../../../UtilityComponents/ConfirmationDialog"
import StudentUpdateCard from "../StudentUpdateCard"

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Save: forwardRef((props, ref) => <Save {...props} ref={ref} />),
}

const StudentTable = ({
  students,
  handleOpen,
  deleteStudent,
  updateStudent,
}) => {
  const tableRef = React.useRef(null)
  const [errorAlert, setErrorAlert] = React.useState(false)
  const [selectedStudent, setSelectedStudent] = React.useState([])
  const [studentValues, setStudentValues] = React.useState({
    uid: "",
    studentName: "",
    studentLastname: "",
    studentEmail: "",
    studentPhone: "",
    studentCourse: "",
    studentGender: "",
  })
  const [deleteDialog, setDeleteDialog] = React.useState(false)
  const [updateDialog, setUpdateDialog] = React.useState(false)

  const handleErrorAlertClose = () => {
    setErrorAlert(false)
  }

  const handleDeleteDialogClose = () => {
    setDeleteDialog(false)
  }

  const handleDeleteDialogOpen = () => {
    setDeleteDialog(true)
  }

  const handleUpdateDialogOpen = () => {
    setUpdateDialog(true)
  }

  const handleUpdateDialogClose = () => {
    setUpdateDialog(false)
  }

  const handleStudentDeleteBatch = () => {
    let studentUidArray = []

    selectedStudent.forEach(student => {
      studentUidArray.push(student.uid)
    })

    deleteStudent(studentUidArray)
  }

  return (
    <div>
      <ConfirmationDialog
        open={deleteDialog}
        type="warning"
        dialogClose={handleDeleteDialogClose}
        callback={handleStudentDeleteBatch}
        message="Atenção, esta ação é irreversível. Você está prestes a deletar alunos."
      />
      <StudentUpdateCard
        open={updateDialog}
        handleClose={handleUpdateDialogClose}
        updateStudent={updateStudent}
        studentValues={studentValues}
      ></StudentUpdateCard>
      <AlertFlex
        autoHideDuration={3000}
        severity="error"
        open={errorAlert}
        message={"Por favor, edite apenas 1 entrada por vez"}
        handleClose={handleErrorAlertClose}
      ></AlertFlex>
      <MaterialTable
        onSelectionChange={data => {
          setSelectedStudent(data)
        }}
        tableRef={tableRef}
        localization={{
          body: {
            emptyDataSourceMessage: "Nenhum aluno encontrado",
          },
          toolbar: {
            searchTooltip: "Procurar por um campo específico",
            searchPlaceholder: "Pesquisar",
            nRowsSelected: "{0} alunos selecionados",
          },
          pagination: {
            labelRowsSelect: "linhas sendo exibidas",
            labelDisplayedRows: "{count} de {from}-{to}",
            firstTooltip: "Primeira página",
            lastTooltip: "Última página",
            nextTooltip: "Próxima página",
            previousTooltip: "Página anterior",
          },
          header: {
            actions: "Ações",
          },
        }}
        icons={tableIcons}
        title="Alunos"
        columns={[
          { title: "uid", field: "uid", hidden: true },
          { title: "Nome", field: "studentName" },
          { title: "Sobrenome", field: "studentLastname" },
          { title: "E-mail", field: "studentEmail" },
          {
            title: "Gênero",
            field: "studentGender",
          },
          {
            title: "Telefone",
            field: "studentPhone",
          },
          {
            title: "Curso ativo",
            field: "activeCourse",
          },
        ]}
        data={students}
        actions={[
          {
            icon: Edit,
            tooltip: "Editar um aluno",
            onClick: (event, rowData) => {
              if (tableRef.current.dataManager.selectedCount > 1) {
                setErrorAlert(true)
              } else {
                handleUpdateDialogOpen()
                setStudentValues(rowData[0])
              }
            },
          },
          {
            icon: Add,
            tooltip: "Adicionar aluno",
            isFreeAction: true,
            onClick: event => handleOpen(),
          },
          rowData => ({
            icon: Delete,
            tooltip: "Excluir um aluno",
            onClick: (event, rowData) => {
              handleDeleteDialogOpen()
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          selection: true,
        }}
      />
    </div>
  )
}

export default StudentTable
