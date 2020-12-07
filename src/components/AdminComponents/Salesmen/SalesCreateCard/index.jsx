import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core"
import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormikField from "../../../UtilityComponents/FormikField"
import MaskInput from "../../../UtilityComponents/MaskInput"

function SalesCreateCard({ createSale, open, handleClose }) {
  return (
    <React.Fragment>
      <Fade in={true} timeout={{ enter: 500 }}>
        <div>
          <Formik
            initialValues={{
              value: "",
              salesman: "",
              student: "",
              course: "",
              upfrontValue: "",
              installments: "",
            }}
            onSubmit={(values, action) => {
              createSale(
                values.value,
                values.salesman,
                values.student,
                values.course,
                values.upfrontValue,
                values.installments
              )
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
                    Registrar uma nova venda
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Preencha as informaçõe sobre a venda e clique em REGISTRAR
                      VENDA
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
                      Registrar venda
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

export default SalesCreateCard
