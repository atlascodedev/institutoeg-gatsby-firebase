import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Graduate"],
    allVariants: ["Graduate"],
    h1: ["Graduate"],
    h2: ["Graduate"],
    h3: ["Graduate"],
    h4: ["Graduate"],
    body1: ["Graduate"],
    body2: ["Graduate"],
    
  },

  palette: {
    primary: {
      main: "#04365a",
    },

    secondary: {
      main: "#004b58",
    },

    warning: {
      main: "#ff9800",
    },

    info: {
      main: "#2196f3",
    },

    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
})
