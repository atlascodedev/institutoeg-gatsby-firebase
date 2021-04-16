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
  Menu,
  MenuItem,
  Select,
} from "@material-ui/core"
import { Form, Formik } from "formik"
import React from "react"
import FormikField from "../../../../UtilityComponents/FormikField"
import * as Yup from "yup"

const CourseAddAreaCard = ({
  open,
  handleClose,
  courseLevels,
  createCourseArea,
}) => {
  console.log(courseLevels)

  return (
    <React.Fragment>
      <Fade in={true} timeout={{ enter: 500 }}>
        <div>
          <Formik
            initialValues={{
              courseAreaName: "",
              courseAreaLevel: "",
            }}
            validationSchema={Yup.object({
              courseAreaName: Yup.string().required(
                "É necessário fornecer um nome para a área do curso"
              ),
              courseAreaLevel: Yup.string().required(
                "É necessário selecionar uma área para o seu curso"
              ),
            })}
            onSubmit={(values, action) => {
              createCourseArea(values.courseAreaName, values.courseAreaLevel)

              action.resetForm()
              action.setSubmitting(false)

              handleClose()
            }}
          > 
            {formik => (
              <Form>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Criar uma nova área de curso</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Digite o nome do nível de curso e clique em{" "}
                      <strong>criar área</strong>
                    </DialogContentText>
                    <Box py={1}>
                      <FormikField
                        name="courseAreaName"
                        margin="dense"
                        label="Medicina, direito..."
                        fullWidth
                      ></FormikField>
                    </Box>

                    <Box py={1}>
                      <FormControl
                        fullWidth
                        style={{ minWidth: 120 }}
                        error={Boolean(
                          formik.touched.courseAreaLevel &&
                            formik.errors.courseAreaLevel
                        )}
                      >
                        <InputLabel id="courseAreaLevelLabel">
                          Nível da área{" "}
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="courseAreaLevelLabel"
                          id="courseAreaLevel"
                          // native
                          name="courseAreaLevel"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.courseAreaLevel}
                        >
                          {courseLevels && courseLevels.length > 0 ? (
                            courseLevels.map((courseLevel, index) => (
                              <MenuItem
                                key={index}
                                value={courseLevel.courseLevelName}
                              >
                                {courseLevel.courseLevelName}
                              </MenuItem>
                            ))
                          ) : (
                            <p>É isso ai</p>
                          )}
                        </Select>

                        <FormHelperText>
                          {formik.errors.courseAreaLevel}
                        </FormHelperText>
                      </FormControl>
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
                      Criar área
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

export default CourseAddAreaCard
