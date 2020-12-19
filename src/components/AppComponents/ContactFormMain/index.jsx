import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import MaskInput from "../../UtilityComponents/MaskInput"
import { Box, Button, Container, Grid, makeStyles } from "@material-ui/core"
import FormikField from "../../UtilityComponents/FormikField"

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

  return (
    <div className={classes.ancientRoot}>
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
        onSubmit={(values, action) => {
          console.log(values)
          action.resetForm()

          action.setSubmitting(false)
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
                  <Box width={"30%"}>
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
