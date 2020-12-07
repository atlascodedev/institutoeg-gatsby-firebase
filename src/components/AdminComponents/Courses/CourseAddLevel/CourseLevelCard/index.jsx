import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  SvgIcon,
  Typography,
} from "@material-ui/core"
import { Delete, Edit, School } from "@material-ui/icons"
import React, { useState } from "react"


const useStyles = makeStyles(theme => ({
  rootIcon: {
    flexGrow: 2,
  },

  customPaper: {
    maxWidth: 375,
    padding: "1em",
    display: "flex",
    marginTop: "2em",
    marginBottom: "2em",
  },

  cardCaption: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },

  icon: {
    color: "#a1a0a0",
    marginLeft: "10px",
    marginRight: "25px",
  },

  subText: {
    color: "#a1a1a1",
    fontSize: "0.75em",
  },

  actionIconContainer: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
  },

  actionIcon: {
    marginLeft: "10px",
    display: "block",
  },

  buttonIcon: {
    color: "#242323",

    padding: "5px",
  },
}))

function CourseLevelCard({
  caption,
  subcaption,
  icon: IconComponent,
  remove,
  uid,
}) {
  const classes = useStyles()

  const [dialogState, setDialogState] = useState(false)

  const handleDialogOpen = () => {
    setDialogState(true)
  }

  const handleDialogClose = () => {
    setDialogState(false)
  }

  return (
    <Paper className={classes.customPaper}>
      <Grid container>
        <Grid className={classes.rootIcon} item>
          <SvgIcon className={classes.icon} fontSize="large">
            <IconComponent />
          </SvgIcon>
        </Grid>

        <Grid item className={classes.cardCaption}>
          <Typography variant="caption">{caption}</Typography>
          <Typography className={classes.subText} variant="caption">
            {subcaption}
          </Typography>
        </Grid>

        <Grid
          item
          className={classes.actionIconContainer}
          container
          style={{ width: "auto" }}
        >
          <Grid className={classes.actionIcon} item>
            <IconButton
              onClick={handleDialogOpen}
              className={classes.buttonIcon}
            >
              <Edit></Edit>
            </IconButton>
          </Grid>

          <Grid className={classes.actionIcon} item>
            <IconButton onClick={remove} className={classes.buttonIcon}>
              <Delete></Delete>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CourseLevelCard
