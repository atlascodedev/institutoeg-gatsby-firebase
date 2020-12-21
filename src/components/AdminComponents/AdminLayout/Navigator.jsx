import * as React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import { useLocation, Link } from "@reach/router"
import AccountCard from "../AccountCard"

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
    marginBottom: 0,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
})

function Navigator(props) {
  const [categories, setCategories] = React.useState([])

  const { classes, ...other } = props
  const { pathname } = useLocation()

  React.useEffect(() => {
    setCategories(props.categories)
  }, [])

  return (
    <Drawer variant="permanent" {...other}>

      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          Instituto Gnosis
        </ListItem>
        {/* <Link to={"/admin/dashboard"} style={{ textDecoration: "none" }}>
          <ListItem
            style={{ cursor: "pointer" }}
            className={clsx(classes.item, classes.itemCategory)}
          >
            <ListItemIcon
              className={clsx(
                classes.itemIcon,
                classes.itemPrimary,
                pathname == "/admin/dashboard" && classes.itemActiveItem
              )}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              className={clsx(
                classes.itemPrimary,
                pathname == "/admin/dashboard" && classes.itemActiveItem
              )}
            >
              Visão geral
            </ListItemText>
          </ListItem>
        </Link> */}
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => (
              <Link key={childId} to={path} style={{ textDecoration: "none" }}>
                <ListItem
                  button
                  className={clsx(
                    classes.item,
                    path == pathname && classes.itemActiveItem
                  )}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigator)
