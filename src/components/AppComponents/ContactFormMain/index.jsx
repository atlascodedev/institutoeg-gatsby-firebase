import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import MaskInput from "../../UtilityComponents/MaskInput"
import { Box, Button, Container, Grid, makeStyles } from "@material-ui/core"
import FormikField from "../../UtilityComponents/FormikField"
import Axios from "axios"
import ConfirmationDialog from "../../UtilityComponents/ConfirmationDialog"

const useStyles = makeStyles(theme => ({
  ancientRoot: {
    backgroundColor: "#F6F6F6",
  },

  root: {
    padding: "1.5em",
    fontFamily: theme.typography.fontFamily,
  },

  contactSectionTitle: {
    color: theme.palette.primary.main,
    fontSize: "2em",
  },
}))

function CourseFormMain(props) {
  const classes = useStyles()

  const [dialogState, setDialogState] = React.useState(false)

  const handleDialogClose = () => {
    setDialogState(false)
  }

  const handleDialogOpen = () => {
    setDialogState(true)
  }

  return (
    <div className={classes.ancientRoot}>
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
        initialValues={{
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          contactMessage: "",
        }}
        validationSchema={Yup.object({
          contactName: Yup.string().required(
            "É necessário inserir um nome para contato"
          ),
          contactEmail: Yup.string()
            .email("Insira um e-mail válido")
            .required("É necessário inserir um e-mail"),

          contactPhone: Yup.string().required(
            "Insira um número de telefone para contato"
          ),
          contactMessage: Yup.string().required(
            "Digite uma mensagem com sua dúvida e/ou proposta para nos dar um contexto."
          ),
        })}
        onSubmit={(values, actions) => {
          Axios.post(
            "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/gnosis",
            {
              name: values.contactName,
              email: values.contactEmail,
              message: values.contactMessage,
              phone: values.contactPhone,
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
            <Container className={classes.root}>
              <Grid spacing={4} container justify="center">
                <Grid xs={12} item container justify="center">
                  <Box className={classes.contactSectionTitle}>Contato</Box>
                </Grid>

                <Grid xs={12} item container justify="center">
                  <FormikField
                    name="contactName"
                    margin="dense"
                    label="Nome para contato"
                  />
                </Grid>

                <Grid xs={12} item container justify="center">
                  <MaskInput
                    mask={" (99) 9-9999-9999"}
                    name="contactPhone"
                    label="Número par contato"
                    onChange={formik.handleChange}
                    value={formik.values.contactPhone}
                    margin="dense"
                  ></MaskInput>
                </Grid>

                <Grid xs={12} item container justify="center">
                  <FormikField
                    name="contactEmail"
                    margin="dense"
                    label="Email para contato"
                  />
                </Grid>

                <Grid xs={12} item container justify="center">
                  <Box width={{ xs: "100%", md: "40%" }}>
                    <FormikField
                      name="contactMessage"
                      margin="dense"
                      label="Deixe-nos uma mensagem"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                    ></FormikField>
                  </Box>
                </Grid>

                <Grid xs={12} item container justify="center">
                  <Button type="submit" variant="contained" color="primary">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CourseFormMain
