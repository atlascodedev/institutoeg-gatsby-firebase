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

function StudentUpdateCard({
  updateStudent,
  open,
  handleClose,
  studentValues,
}) {
  return (
    <React.Fragment>
      <Fade in={true} timeout={{ enter: 500 }}>
        <div>
          <Formik
            enableReinitialize
            initialValues={{
              studentName: studentValues.studentName,
              studentLastname: studentValues.studentLastname,
              studentEmail: studentValues.studentEmail,
              studentPhone: studentValues.studentPhone,
              activeCourse: studentValues.activeCourse,
              studentGender: studentValues.studentGender,
            }}
            onSubmit={(values, action) => {
              console.log(values)

              updateStudent(
                studentValues.uid,
                values.studentName,
                values.studentLastname,
                values.studentEmail,
                values.studentPhone,
                values.activeCourse,
                values.studentGender
              )
              action.resetForm()
              handleClose()
              action.setSubmitting(false)
            }}
            validationSchema={Yup.object({
              studentName: Yup.string().required(
                "Digite o primeiro nome do usuário"
              ),
              studentLastname: Yup.string().required(
                "Digite o sobrenome do usuário"
              ),
              studentEmail: Yup.string()
                .email("Digite um e-mail válido")
                .required("É necessário inserir o e-mail do usuário"),
              studentPhone: Yup.string().required(
                "Digite o telefone do usuário"
              ),
              activeCourse: Yup.string().required(
                "Digite o nome do curso do aluno"
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
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box>
                        {`Atualizar aluno - ${studentValues.studentName} ${studentValues.studentLastname}`}
                      </Box>

                      <Box>{`Código identificador - ${studentValues.uid}`}</Box>
                    </Box>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Digite as atualizações necessárias para o aluno e clique
                      em ATUALIZAR ALUNO
                    </DialogContentText>

                    <Box py={1}>
                      <FormikField
                        autoFocus
                        margin="dense"
                        name="studentName"
                        label="Primeiro nome do aluno"
                        fullWidth
                        value={formik.values.studentName}
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="studentLastname"
                        label="Sobrenome do aluno"
                        fullWidth
                        value={formik.values.studentLastname}
                      />
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="studentEmail"
                        label="E-mail do aluno"
                        fullWidth
                        value={formik.values.studentEmail}
                      />
                    </Box>

                    <Box py={1}>
                      <MaskInput
                        mask={" (99) 9-9999-9999"}
                        name="studentPhone"
                        label="Telefone do aluno"
                        onChange={formik.handleChange}
                        value={formik.values.studentPhone}
                        margin="dense"
                        fullWidth
                      ></MaskInput>
                    </Box>

                    <Box py={1}>
                      <FormControl
                        fullWidth
                        style={{ minWidth: 120 }}
                        error={Boolean(
                          formik.touched.studentGender &&
                            formik.errors.studentGender
                        )}
                      >
                        <InputLabel id="studentGenderLabel">
                          Gênero do aluno{" "}
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="studentGenderLabel"
                          id="studentGender"
                          // native
                          name="studentGender"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.studentGender}
                        >
                          <MenuItem value={""}></MenuItem>
                          <MenuItem value={"Masculino"}>Masculino</MenuItem>
                          <MenuItem value={"Feminino"}>Feminino</MenuItem>
                          <MenuItem value={"Outro"}>Outro</MenuItem>
                          <MenuItem value={"Não quis responder"}>
                            Não quis responder
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {formik.errors.studentGender
                            ? "Seleciono o gênero do usuário"
                            : null}
                        </FormHelperText>
                        <FormHelperText>
                          {formik.errors.studentGender}
                        </FormHelperText>
                      </FormControl>
                    </Box>

                    <Box py={1}>
                      <FormikField
                        margin="dense"
                        name="activeCourse"
                        label="Curso do aluno"
                        fullWidth
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
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
                      Atualizar aluno
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

export default StudentUpdateCard
