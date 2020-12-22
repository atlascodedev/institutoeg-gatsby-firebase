import { Button, Container, makeStyles } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

const LandingBackgroundHero = styled.div`
  position: relative;
  z-index: 1;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
  },

  landingHeroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    height: "50vh",

    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
  },

  landingHeroGridCta: {
    alignSelf: "center",
    justifySelf: "end",
    width: "65%",
  },

  ctaMainText: {
    color: theme.palette.primary.main,
    fontSize: "0.9rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },

  ctaAuxText: {
    fontSize: "0.5rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
  },

  ctaButton: {
    fontSize: "0.4rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75rem",
    },
  },
}))

function LandingHero({ cta }) {
  const classes = useStyles()

  const [ctaRef, setCtaRef] = React.useState(null)

  React.useEffect(() => {
    setCtaRef(cta)
  }, [])

  const handleCta = () => {
    ctaRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={classes.root}>
      <LandingBackgroundHero
        image={
          "https://hyximpsy.sirv.com/InstitutoGnosis/paoduro.png?sharpen=5&w=1920&h=1080"
        }
      >
        <Container>
          <div className={classes.landingHeroGrid}>
            <div></div>
            <div className={classes.landingHeroGridCta}>
              <h1 className={classes.ctaMainText}>
                Invista no seu futuro e qualifique-se para o mercado de trabalho
              </h1>
              <h5 className={classes.ctaAuxText}>
                Conheça os nossos cursos de pós-graduação a distância na área da
                medicina
              </h5>
              <Button
                onClick={handleCta}
                className={classes.ctaButton}
                color="primary"
                variant="contained"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </Container>
      </LandingBackgroundHero>
    </div>
  )
}

export default LandingHero
