import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Slide,
  SvgIcon,
} from "@material-ui/core"
import { CheckCircle } from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {},

  dialogIcon: {
    fontSize: "8em",
    color: "green",
    margin: "0.25em 0.5em 0.5em 0.5em",
  },

  dialogTitle: {
    textAlign: "center",
  },

  dialogText: {
    textAlign: "center",
    fontSize: "1.25em",
    fontWeight: 500,
    marginBottom: "1.75em",
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function ConfirmationDialog({ open, dialogClose, message, title }) {
  const classes = useStyles()

  const messageText = message
    ? message
    : "Placeholder lorem ipsum message pass the MESSAGE prop to this component to replace it"

  const messageTitle = title ? title : "Place holder title"

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        onClose={dialogClose}
        open={open}
      >
        <DialogTitle className={classes.dialogTitle}>
          {messageTitle}
        </DialogTitle>
        <DialogContent dividers>
          <Container>
            <Grid container justify="center">
              <Grid item container justify="center">
                <SvgIcon className={classes.dialogIcon}>
                  <CheckCircle></CheckCircle>
                </SvgIcon>
              </Grid>

              <Grid item container justify="center">
                <Box className={classes.dialogText}>{messageText}</Box>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogClose} color="secondary" variant="outlined">
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmationDialog
