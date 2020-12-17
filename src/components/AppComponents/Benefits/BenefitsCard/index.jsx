import { Box, makeStyles, Paper, SvgIcon } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  cardPaper: {
    padding: "1em 0.75em 1em 0.75em",
    textAlign: "center",
    fontSize: "0.5rem",
    minWidth: "150px",
    maxWidth: "250px",
    minHeight: "100px",
    maxHeight: "125px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardIcon: {
    fontSize: "2.5rem",
    fill: theme.palette.primary.main,
    marginBottom: "0.2em",
  },

  captionContainer: {
    width: "85%",
  },

  classInnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}))

const BenefitsCard = ({ icon, caption, elevation }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper
        className={classes.cardPaper}
        elevation={elevation ? elevation : 3}
      >
        <div className={classes.classInnerContainer}>
          <SvgIcon className={classes.cardIcon} component={icon} />
          <div className={classes.captionContainer}>
            <Box>{caption}</Box>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default BenefitsCard
