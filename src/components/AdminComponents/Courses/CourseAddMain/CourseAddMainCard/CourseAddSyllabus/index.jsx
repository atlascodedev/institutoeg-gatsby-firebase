import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1em",
    marginBottom: "1em",
    width: "100%",
  },
  addSyllabusButton: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
}))

function CourseAddSyllabus({ syllabusList, add }) {
  const classes = useStyles()
  const [syllabusItemValue, setSyllabusItemValue] = React.useState("")

  const handleSubmitSyllabus = e => {
    try {
      e.preventDefault()

      add(prevState => [...prevState, syllabusItemValue])

      setSyllabusItemValue("")
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveSyllabusItem = item => {
    let newSyllabus = syllabusList.filter(e => {
      return e !== item
    })

    add(newSyllabus)
  }

  return (
    <div className={classes.root}>
      <form onSubmit={e => handleSubmitSyllabus(e)}>
        <Grid spacing={3} container justify="center">
          <Grid item container justify="center">
            <Box display="flex" alignItems="center">
              <TextField
                label="Módulo do curso"
                placeholder={"Nome do módulo..."}
                onChange={e => setSyllabusItemValue(e.target.value)}
              />
            </Box>

            <Box
              className={classes.addSyllabusButton}
              ml={3}
              display="flex"
              alignItems="flex-end"
            >
              <Button type="submit" variant="contained">
                +
              </Button>
            </Box>
          </Grid>

          <Grid item container spacing={3} justify="center">
            {syllabusList.map((syllabusItem, index) => (
              <Grid
                xs={12}
                container
                justify="center"
                key={index + Math.random() * 25}
                item
              >
                <Box px={2}>
                  <Chip
                    size="small"
                    label={syllabusItem}
                    onDelete={() => handleRemoveSyllabusItem(syllabusItem)}
                    color="primary"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CourseAddSyllabus
