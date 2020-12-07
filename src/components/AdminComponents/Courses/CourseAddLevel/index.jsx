import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormikField from "../../../UtilityComponents/FormikField"
import { Delete, School } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const CourseAddLevelCard = ({ open, handleClose, addCourseLevel }) => {
  return (
    <React.Fragment>
      <Fade in={true} timeout={{ enter: 500 }}>
        <div>
          <Formik
            initialValues={{
              courseLevel: "",
            }}
            validationSchema={Yup.object({
              courseLevel: Yup.string().required(
                "É necessário fornecer um nome para o nível do curso"
              ),
            })}
            onSubmit={(values, action) => {
              addCourseLevel(values.courseLevel)

              action.resetForm()
              action.setSubmitting(false)

              handleClose()
            }}
          >
            {formik => (
              <Form>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Criar um novo nível de curso</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Digite o nome do nível de curso e clique em{" "}
                      <strong>criar nível</strong>
                    </DialogContentText>
                    <Box py={1}>
                      <FormikField
                        name="courseLevel"
                        margin="dense"
                        label="Pós-graduação, extensão..."
                        fullWidth
                      ></FormikField>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      color="primary"
                      variant="outlined"
                    >
                      Cancelar
                    </Button>

                    <Button
                      onClick={formik.handleSubmit}
                      color="primary"
                      variant="contained"
                    >
                      Criar nível
                    </Button>
                  </DialogActions>
                </Dialog>
              </Form>
            )}
          </Formik>
        </div>
      </Fade>
    </React.Fragment>
  )
}

function CourseAddLevel({ addCourseLevel, getCourseLevels }) {
  const classes = useStyles()

  const [addLevelCard, setAddLevelCard] = React.useState(false)
  const [courseLevels, setCourseLevels] = React.useState([])

  const handleAddLevelCardOpen = () => {
    setAddLevelCard(true)
  }
  const handleAddLevelCardClose = () => {
    setAddLevelCard(false)
  }

  React.useEffect(() => {
    const unsub = getCourseLevels(courseLevelsArray => {
      setCourseLevels(courseLevelsArray)
    })

    return () => {
      unsub()
    }
  }, [])

  console.log(courseLevels)

  return (
    <div className={classes.root}>
      <CourseAddLevelCard
        handleClose={handleAddLevelCardClose}
        open={addLevelCard}
        addCourseLevel={addCourseLevel}
      />
      <Grid container justify="center">
        <Grid item container justify="center">
          <Button
            onClick={handleAddLevelCardOpen}
            color="primary"
            variant="contained"
          >
            Adicionar nível de curso
          </Button>
        </Grid>
        <Grid item container justify="center">
          {courseLevels && courseLevels.length > 0 ? (
            <p>ALO ALO</p>
          ) : (
            <p>
              Nenhum nível de curso encontrado, adicione um nível de curso para
              começar
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default CourseAddLevel
