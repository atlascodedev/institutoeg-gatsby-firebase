import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  listItemText: {
    fontSize: "2em",
    fontWeight: 600,
  },
}))

function AppDrawerListItem({ icon: AtlasListIcon, text, divider, ...props }) {
  const classes = useStyles()

  const iconTemp = AtlasListIcon ? (
    <ListItemIcon>
      <AtlasListIcon />
    </ListItemIcon>
  ) : null

  return (
    <div style={{ width: "100%" }}>
      <ListItem
        style={{ width: "100%" }}
        {...props}
        divider={divider ? true : false}
        button
      >
        {iconTemp}
        <ListItemText
          className={classes.listItemText}
          style={{ fontWeight: 600 }}
          primary={text}
        />
      </ListItem>
    </div>
  )
}

export default AppDrawerListItem
