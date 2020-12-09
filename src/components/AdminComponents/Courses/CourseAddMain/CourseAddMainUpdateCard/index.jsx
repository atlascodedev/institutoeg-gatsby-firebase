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
import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormikField from "../../../../UtilityComponents/FormikField"

function CourseMainUpdateCard({ callback, open, handleClose, values }) {
  return (
    <React.Fragment>
      <Fade in={true} timeout={{ enter: 500 }}>
        <div>
          <Formik
            enableReinitialize
            initialValues={{
              value: values.value,
              salesman: values.salesman,
              student: values.student,
              course: values.course,
              upfrontValue: values.upfrontValue,
              installments: values.installments,
            }}
            onSubmit={(values, action) => {
              if (typeof callback === "function" && callback) {
                callback(
                  values.uid,
                  values.value,
                  values.salesman,
                  values.student,
                  values.course,
                  values.upfrontValue,
                  values.installments
                )
              } else {
                console.log(
                  "callback is not a function at CourseAddMainUpdateCard"
                )
              }

              action.resetForm()
              handleClose()
              action.setSubmitting(false)
            }}
            validationSchema={Yup.object({
              value: Yup.string().required("Digite o valor da venda"),
              salesman: Yup.string().required("Digite o nome do vendedor"),
              student: Yup.string().required("Digite o nome do aluno"),
              course: Yup.string().required("Digite o nome do curso vendido"),
              upfrontValue: Yup.string().required("Digite o valor da entrada"),
              installments: Yup.string().required(
                "Digite o número de parcelas"
              ),
            })}
          >
            {formik => (
              <Form>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Atualizar um registro de venda
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Preencha as atualizações sobre a venda e clique em
                      ATUALIZAR VENDA
                    </DialogContentText>

                    <Box py={1}>
                      <FormikField
                        autoFocus
                        margin="dense"
                        name="value"
                        label="Valor da venda"
                        fullWidth
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="salesman"
                        label="Nome do vendedor"
                        fullWidth
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="student"
                        label="Nome do aluno"
                        fullWidth
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="course"
                        label="Curso vendido"
                        fullWidth
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="upfrontValue"
                        label="Entrada"
                        fullWidth
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="installments"
                        label="Parcelas"
                        fullWidth
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      color="primary"
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={formik.handleSubmit}
                      color="primary"
                    >
                      Atualizar venda
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

export default CourseMainUpdateCard
