import * as React from "react"
import AppBar from "@material-ui/core/AppBar"

import { Fade, makeStyles, Tab, Tabs } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  },
}))

function Content(props) {
  const classes = useStyles()

  const myComponent = props.activeChild

  return (
    <div>
      <Fade mountOnEnter unmountOnExit in={true} timeout={{ enter: 500 }}>
        <div>{myComponent}</div>
      </Fade>
    </div>
  )
}

export default Content
