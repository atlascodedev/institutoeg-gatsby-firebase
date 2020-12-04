import React, { useContext, useEffect } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import LazyImage from "../../UtilityComponents/LazyImage"
import thumb1 from "../../../images/thumbnails/t1.png"
import thumb2 from "../../../images/thumbnails/t2.png"
import thumb3 from "../../../images/thumbnails/t3.png"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos direitos reservados © "}
      <Link color="inherit" href="https://institutoeg.com/">
        Instituto Educacional Gnosis
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const imageArray = [
  {
    image:
      "https://hyximpsy.sirv.com/InstitutoGnosis/paoduro.png?sharpen=5&w=1920&h=1080",
    thumbnail:
      "https://hyximpsy.sirv.com/InstitutoGnosis/paoduro.png?sharpen=5&w=400&h=300",
  },
  {
    image:
      "https://hyximpsy.sirv.com/InstitutoGnosis/login/7fdd6381-dfe9-4cba-a439-7eec1ec84da8.png?sharpen=5&w=1920&h=1080",
    thumbnail: thumb1,
  },

  {
    image:
      "https://hyximpsy.sirv.com/InstitutoGnosis/login/9b8d321c-a3a6-4d15-8ac8-075ed33fc74c.png?sharpen=5&w=1920&h=1080",
    thumbnail: thumb3,
  },

  {
    image:
      "https://hyximpsy.sirv.com/InstitutoGnosis/login/9352ba2f-93d2-4e70-949c-2cb975e1b37a.png?sharpen=5&w=1920&h=1080",
    thumbnail: thumb2,
  },
]

const randomImage = Math.floor(Math.random() * imageArray.length)

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignInSide() {
  const loginUser = e => {
    e.preventDefault()

    const userLoginEmail = e.target[0].value
    const userLoginPassword = e.target[2].value
  }

  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <SnackError error={null} /> */}
      <Grid item xs={false} sm={false} md={7}>
        <Box display={{ xs: "none", md: "block" }}>
          <LazyImage
            image={imageArray[randomImage].image}
            thumbnail={imageArray[randomImage].thumbnail}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Instituto Educacional Gnosis - Administração
          </Typography>
          <form
            onSubmit={e => loginUser(e)}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
