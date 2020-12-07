import { Button, Fade, Grid, makeStyles } from "@material-ui/core"
import { School } from "@material-ui/icons"
import React from "react"
import ConfirmationDialog from "../../../UtilityComponents/ConfirmationDialog"
import CourseAddLevelCard from "./CourseAddLevelCard"
import CourseLevelCard from "./CourseLevelCard"

const useStyles = makeStyles(theme => ({
  root: {},
}))

function CourseAddLevel({
  addCourseLevel,
  getCourseLevels,
  deleteCourseLevel,
}) {
  const classes = useStyles()

  const [addLevelCard, setAddLevelCard] = React.useState(false)
  const [courseLevels, setCourseLevels] = React.useState([])
  const [courseDeleteDialog, setCourseDeleteDialog] = React.useState(false)
  const [selectedCourseLevel, setSelectedCourseLevel] = React.useState(0)

  React.useEffect(() => {
    const unsub = getCourseLevels(courseLevelsArray => {
      setCourseLevels(courseLevelsArray)
    })

    return () => {
      unsub()
    }
  }, [])

  const handleAddLevelCardOpen = () => {
    setAddLevelCard(true)
  }
  const handleAddLevelCardClose = () => {
    setAddLevelCard(false)
  }

  const handleCourseDeleteDialogOpen = () => {
    setCourseDeleteDialog(true)
  }

  const handleCourseDeleteDialogClose = () => {
    setCourseDeleteDialog(false)
  }

  const deleteCourseLevelDialogCallback = () => {
    deleteCourseLevel(selectedCourseLevel)
  }

  console.log(selectedCourseLevel)

  return (
    <div className={classes.root}>
      <CourseAddLevelCard
        handleClose={handleAddLevelCardClose}
        open={addLevelCard}
        addCourseLevel={addCourseLevel}
      />
      <ConfirmationDialog
        type="warning"
        open={courseDeleteDialog}
        dialogClose={handleCourseDeleteDialogClose}
        message="Atenção, está ação é irreversível. Você está prestes a deletar um nível de curso"
        callback={deleteCourseLevelDialogCallback}
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
                <Fade
                  in={true}
                  mountOnEnter
                  unmountOnExit
                  timeout={{ enter: 750, exit: 750 }}
                >
                  <div>
                    <CourseLevelCard
                      caption={courseLevel.courseLevelName}
                      icon={School}
                      remove={() => {
                        handleCourseDeleteDialogOpen()
                        setSelectedCourseLevel(courseLevel.uid)
                      }}
                      subcaption="Nível de curso"
                      uid={courseLevel.uid}
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
