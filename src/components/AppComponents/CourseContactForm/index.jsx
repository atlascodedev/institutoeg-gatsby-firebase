import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Box, Button, Grid, makeStyles } from "@material-ui/core"
import { AccountCircle, Email, Phone } from "@material-ui/icons"
import FormikField from "../../UtilityComponents/FormikField"
import MaskInput from "../../UtilityComponents/MaskInput"
import ConfirmationDialog from "../../UtilityComponents/ConfirmationDialog"
import Axios from "axios"

const validationSchema = Yup.object({
  name: Yup.string()
    .max(35, "Por favor, digite um nome com menos de 35 caracteres")
    .required("Digite seu nome"),

  phone: Yup.string().required("Digite um número de telefone para contato"),

  email: Yup.string()
    .email("Digite um endereço de e-mail válido")
    .required("É preciso inserir um e-mail para contato"),

  message: Yup.string().required("Digite uma mensagem"),
})

const useStyles = makeStyles(theme => ({
  formItem: {
    marginBottom: "0.75em",
  },

  formText: {
    fontSize: "10px",
    "&::placeholder": {
      fontSize: "5px",
    },
  },

  iconSpacing: {
    // marginRight: "em",
  },
}))

function CourseContactForm({ courseInfo = "Curso - Área - Nível da área" }) {
  const classes = useStyles()

  const [dialogState, setDialogState] = React.useState(false)

  const handleDialogOpen = () => {
    setDialogState(true)
  }

  const handleDialogClose = () => {
    setDialogState(false)
  }

  return (
    <div>
      <ConfirmationDialog
        title={"Mensagem enviada com sucesso"}
        message={
          "Obrigado pelo interesse! Sua mensagem foi enviada com sucesso, logo entraremos em contato com você através do número fornecido no formulário."
        }
        type="success"
        dialogClose={handleDialogClose}
        open={dialogState}
      />
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(
            values.email,
            values.message,
            values.phone,
            values.name,
            courseInfo
          )
          Axios.post(
            "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis-curso",
            {
              name: values.name,
              email: values.email,
              message: values.message,
              phone: values.phone,
              course: courseInfo,
            }
          )
            .then(result => {
              console.log(result)
              actions.setSubmitting(false)
              actions.resetForm()
              handleDialogOpen()
            })
            .catch(error => {
              console.log(error)
              actions.setSubmitting(false)
            })
        }}
      >
        {formik => (
          <Form>
            <Box
              style={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                padding: "1.5rem",
                borderRadius: "10px",
              }}
            >
              <Grid
                className={classes.formItem}
                container
                item
                spacing={3}
                alignItems={formik.errors.name ? "center" : "flex-end"}
                justify="center"
              >
                <Grid xs={1} md={2} container justify="center" item>
                  <AccountCircle />
                </Grid>
                <Grid item xs={8} md={10}>
                  <FormikField
                    fullWidth
                    className={classes.formText}
                    name="name"
                    label="Nome"
                    color="secondary"
                  />
                </Grid>
              </Grid>

              <Grid
                className={classes.formItem}
                container
                item
                spacing={3}
                alignItems={formik.errors.phone ? "center" : "flex-end"}
                justify="center"
              >
                <Grid xs={1} md={2} container justify="center" item>
                  <Phone />
                </Grid>
                <Grid xs={8} md={10} item>
                  <MaskInput
                    mask={" (9 9)  9 - 9 9 9 9 - 9 9 9 9"}
                    name="phone"
                    label="Celular/WhatsApp"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    color="secondary"
                  ></MaskInput>
                </Grid>
              </Grid>

              <Grid
                className={classes.formItem}
                container
                item
                spacing={3}
                alignItems={formik.errors.email ? "center" : "flex-end"}
                justify="center"
              >
                <Grid xs={1} md={2} container justify="center" item>
                  <Email />
                </Grid>
                <Grid xs={8} md={10} item>
                  <FormikField
                    fullWidth
                    name="email"
                    label="E-mail"
                    color="secondary"
                  />
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="center">
                <FormikField
                  className={classes.formText}
                  name="message"
                  multiline
                  label="Mensagem"
                  fullWidth
                  margin="normal"
                  rows={2}
                  placeholder="Digite sua mensagem aqui"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>

              <Box mt={2} display="flex " justifyContent="center">
                <Button
                  disabled={!formik.isValid}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Enviar!
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CourseContactForm
