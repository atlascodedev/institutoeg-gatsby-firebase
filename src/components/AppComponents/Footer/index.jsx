import {
  Box,
  Divider,
  Grid,
  makeStyles,
  SvgIcon,
  TextField,
} from "@material-ui/core"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFF",
    fontSize: "0.65rem",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #e0e0e0",
    paddingTop: "1rem",
    textAlign: "center",
    paddingBottom: "1rem",
    flexDirection: "column",
    alignItems: "center",
  },

  upperFooter: {
    width: "60%",
    paddingTop: "1em",
    paddingBottom: "1em",
  },

  lowerFooter: {
    width: "100%",
    paddingTop: "2em",
    paddingBottom: "2em",
    borderTop: "1px solid #e0e0e0",
    padding: "1em",
  },

  socialIcons: {
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
    margin: "0.45rem",
  },
}))

function Footer(props) {
  const classes = useStyles()

  const socialLinks = [
    {
      link: "https://www.facebook.com/InstitutoGnosisEducacional/",
      name: "Facebook",
      icon: Facebook,
    },

    {
      link: "https://www.instagram.com/gnosisinstitutoeducacional/",
      name: "Instagram",
      icon: Instagram,
    },

    {
      link: "https://twitter.com/GnosisInstituto",
      name: "Twitter",
      icon: Twitter,
    },

    {
      link:
        "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
      name: "Youtube",
      icon: YouTube,
    },

    {
      link: "https://institutoeg.com",
      name: "Linkedin",
      icon: LinkedIn,
    },
  ]

  return (
    <div className={classes.root}>
      <div className={classes.upperFooter}>
        <Grid spacing={3} container justify="center">
          <Grid xs={12} sm={6} md={3} item container justify="center">
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item container justify="center">
                <Box fontWeight={900}>Contato</Box>
              </Grid>
              <Grid item container justify="center">
                Avenida Praia de Belas, 1212, sala 424, RS - Brasil
              </Grid>

              <Grid item container justify="center">
                {"(51) 9-9143-1009"}
              </Grid>

              <Grid item container justify="center">
                atendimento@institutoeg.com
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} md={3} item container justify="center">
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item container justify="center">
                <Box fontWeight={900}>Informações</Box>
              </Grid>
              <Grid item container justify="center">
                Sobre nós
              </Grid>

              <Grid item container justify="center">
                Política de privacidade
              </Grid>

              <Grid item container justify="center">
                Institucional
              </Grid>
              <Grid item container justify="center">
                Termos e condições
              </Grid>
              <Grid item container justify="center">
                E-MEC
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} md={3} item container justify="center">
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item container justify="center">
                <Box fontWeight={900}>Cursos</Box>
              </Grid>
              <Grid item container justify="center">
                Cursos de pós-graduação
              </Grid>

              <Grid item container justify="center">
                Cursos de extensão
              </Grid>

              <Grid item container justify="center">
                Cursos multidisciplinares
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={6} md={3} item container justify="center">
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item container justify="center">
                <Box fontWeight={900}>Novidades</Box>
              </Grid>
              <Grid item container justify="center">
                Inscreva-se na nossa newsletter para receber novidades e
                promoções através do seu email
              </Grid>

              <Grid item container justify="center">
                <TextField
                  size="small"
                  variant="outlined"
                  label="Seu e-mail aqui"
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.lowerFooter}>
        <Grid spacing={2} container justify="center">
          <Grid item container justify="center">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.link}>
                <SvgIcon
                  component={item.icon}
                  className={classes.socialIcons}
                ></SvgIcon>
              </a>
            ))}
          </Grid>

          <Grid item container justify="center">
            © {new Date().getFullYear()} - Todos Direitos Reservados Instituto
            Educacional Gnosis
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
