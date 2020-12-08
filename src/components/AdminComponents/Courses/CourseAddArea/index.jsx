import { Button, Fade, Grid } from "@material-ui/core"
import { School } from "@material-ui/icons"
import React from "react"
import ConfirmationDialog from "../../../UtilityComponents/ConfirmationDialog"
import CourseAddAreaCard from "./CourseAddAreaCard"
import CourseAreaCard from "./CourseAreaCard"

function CourseAddArea({
  getCourseLevels,
  createCourseArea,
  getCourseAreas,
  deleteCourseArea,
}) {
  const [createAreaDialog, setCreateAreaDialog] = React.useState(false)
  const [courseLevels, setCourseLevels] = React.useState([])
  const [courseAreas, setCourseAreas] = React.useState([])
  const [selectedArea, setSelectedArea] = React.useState(0)
  const [deleteAreaDialog, setDeleteAreaDialog] = React.useState(false)

  const handleCreateAreaDialogOpen = () => {
    setCreateAreaDialog(true)
  }

  const handleCreateAreaDialogClose = () => {
    setCreateAreaDialog(false)
  }

  const handleDeleteAreaDialogOpen = () => {
    setDeleteAreaDialog(true)
  }

  const handleDeleteAreaDialogClose = () => {
    setDeleteAreaDialog(false)
  }

  const deleteCourseAreaCallback = () => {
    deleteCourseArea(selectedArea)
  }

  React.useEffect(() => {
    const unsubFromLevels = getCourseLevels(courseLevelArray => {
      setCourseLevels(courseLevelArray)
    })

    const unsubFromAreas = getCourseAreas(courseAreaArray => {
      setCourseAreas(courseAreaArray)
    })

    return () => {
      unsubFromLevels()

      unsubFromAreas()
    }
  }, [])

  console.log(getCourseAreas)

  return (
    <div>
      <ConfirmationDialog
        type="warning"
        open={deleteAreaDialog}
        dialogClose={handleDeleteAreaDialogClose}
        callback={deleteCourseAreaCallback}
        message="Atenção, esta ação é irreversível.Você está prestes a deletar uma área de curso."
      ></ConfirmationDialog>
      <CourseAddAreaCard
        createCourseArea={createCourseArea}
        open={createAreaDialog}
        handleClose={handleCreateAreaDialogClose}
        courseLevels={courseLevels}
      />

      <Grid container justify="center">
        <Grid item container justify="center">
          <Button
            onClick={handleCreateAreaDialogOpen}
            color="primary"
            variant="contained"
          >
            Criar área de curso
          </Button>
        </Grid>
        <Grid item container justify="center">
          {courseAreas && courseAreas.length > 0 ? (
            courseAreas.map((areas, index) => (
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
                    <CourseAreaCard
                      caption={areas.courseAreaName}
                      icon={School}
                      remove={() => {
                        handleDeleteAreaDialogOpen()
                        setSelectedArea(areas.uid)
                      }}
                      subcaption={areas.courseAreaLevel}
                      uid={areas.uid}
                    ></CourseAreaCard>
                  </div>
                </Fade>
              </Grid>
            ))
          ) : (
            <p>
              Nenhuma área de curso encontra, se você já adicionou um nível
              agora é hora de adicionar uma área
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default CourseAddArea
