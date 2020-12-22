import {
  Box,
  Button,
  Drawer,
  List,
  makeStyles,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core"
import React from "react"
import AppDrawerListItem from "./AppDrawerListItem"
import { useLocation, useMatch, useNavigate } from "@reach/router"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  appBarRoot: {},

  topMenuPaper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: "8px",
    width: "60vw",
  },

  appDrawerList: {
    display: "flex",
    fontSize: "0.5rem",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
}))

function AtlasAppDrawer({ open, handleClose, handleOpen, menuItems, logo }) {
  const classes = useStyles()

  const [logoSize, setLogoSize] = React.useState(125)

  const location = useLocation()

  const isHome = location.pathname == "/"

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        className={classes.appBarRoot}
      >
        <Paper square className={classes.topMenuPaper} elevation={5}>
          {" "}
          <Box pl={4} pr={5}>
            <Button
              onClick={() => {
                if (!isHome) {
                  navigate("/")
                } else {
                  scrollTo(0, 0)
                }
              }}
            >
              <img width='100' src={logo} alt="" />
            </Button>
          </Box>
        </Paper>
        <List className={classes.appDrawerList}>
          {menuItems.map((item, index) => (
            <AppDrawerListItem
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (isHome) {
                  item.scrollFunction()
                  setTimeout(() => {
                    handleClose()
                  }, 400)
                } else {
                  navigate("/")
                }
              }}
              key={index}
              text={item.menuName}
            ></AppDrawerListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default AtlasAppDrawer
