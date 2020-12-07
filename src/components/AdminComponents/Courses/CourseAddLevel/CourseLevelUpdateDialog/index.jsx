import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
} from "@material-ui/core"
import { Form, Formik } from "formik"
import React from "react"
import FormikField from "../../../../UtilityComponents/FormikField"

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
