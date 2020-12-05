import { AppBar, Tab, Tabs } from "@material-ui/core"
import React from "react"

function AppBarTabs() {
  return (
    <div>
      <AppBar component="div" position="static" elevation={0}>
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default AppBarTabs
