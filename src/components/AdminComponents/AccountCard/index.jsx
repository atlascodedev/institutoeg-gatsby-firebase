import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import PersonIcon from "@material-ui/icons/Person"
import AddIcon from "@material-ui/icons/Add"
import Typography from "@material-ui/core/Typography"
import { blue } from "@material-ui/core/colors"
import { Box, DialogActions, DialogContent, Slide } from "@material-ui/core"
import AvatarChangePicture from "./AvatarChangePicture"

const emails = ["username@gmail.com", "user02@gmail.com"]
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },

  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },

  dialogTitle: {
    fontSize: "0.75em",
  },
})

function AccountCard({ handleClose, handleOpen, open, userInfo, callback }) {
  const classes = useStyles()

  const [user, setUser] = React.useState({
    userName: "Carregando nome do usuário...",
    userEmail: "Carregando e-mail do usuário...",
  })

  const handleCallback = () => {
    if (typeof callback === "function" && callback) {
      callback()
      handleClose()
    }
  }

  return (
    <Dialog
      className={classes.root}
      onClose={handleClose ? handleClose : null}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Slide}
      TransitionProps={{ direciton: "up", timeout: { enter: 300, exit: 300 } }}
    >
      <DialogTitle className={classes.dialogTitle} id="simple-dialog-title">
        <Box fontFamily={"Graduate"} fontSize={{ xs: "10px", md: "14px" }}>
          Opções de conta de usuário
        </Box>

        <Box my={1} borderTop={"solid 1px #333"}></Box>
      </DialogTitle>
      <DialogContent>
        <AvatarChangePicture />

        <Box fontSize={"10px"}>
          <Box mb={1} mt={3}>
            Nome do usuário: <strong>{user.userName}</strong>{" "}
          </Box>

          <Box mb={1} mt={3}>
            E-mail do usuário: <strong>{user.userEmail}</strong>{" "}
          </Box>
        </Box>
      </DialogContent>

      <Box
        borderTop={"solid 1px #333"}
        marginX="auto"
        width={"80%"}
        my={1}
      ></Box>

      <DialogActions>
        <Box
          color={"#04365a"}
          height="25px"
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <Button
            onClick={handleCallback}
            style={{ fontWeight: 600 }}
            color="inherit"
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default AccountCard
