import { Button, Fade, Grid, makeStyles } from "@material-ui/core"
import { School } from "@material-ui/icons"
import React from "react"
import CourseAddLevelCard from "./CourseAddLevelCard"
import CourseLevelCard from "./CourseLevelCard"

const useStyles = makeStyles(theme => ({
  root: {},
}))

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
            courseLevels.map((courseLevel, index) => (
              <Grid
                xs={12}
                sm={6}
                md={4}
                key={index}
                item
                container
                justify="center"
              >
                <Fade in={true} timeout={{ enter: 500 * index }}>
                  <div>
                    <CourseLevelCard
                      caption={courseLevel.courseLevelName}
                      icon={School}
                      remove={null}
                      subcaption="Nível de curso"
                      uid={123}
                    ></CourseLevelCard>
                  </div>
                </Fade>
              </Grid>
            ))
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
