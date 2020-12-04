import * as React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import HelpIcon from "@material-ui/icons/Help"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const lightColor = "rgba(255, 255, 255, 0.7)"

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  iconButtonAvatar: {
    padding: 4,
    marginBottom: "0px",
  },
  iconButtonAvatarPhoto: {
    marginBottom: 0,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
})

function Header(props) {
  const { classes, onDrawerToggle } = props

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs>
              {" "}
              <Typography color="inherit" variant="h6" component="h1">
                Authentication
              </Typography>{" "}
            </Grid>

            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar
                  className={classes.iconButtonAvatarPhoto}
                  src="https://envato-shoebox-0.imgix.net/fcc2/6596-af87-4acc-8354-0033bb6f463a/2014_088_001_0016.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=8f867e9fd278d4721f49ae3ef30503c0"
                  alt="My Avatar"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        {/* <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </Grid>

            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar> */}
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
