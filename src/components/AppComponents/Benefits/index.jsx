import { Container, Grid, makeStyles } from "@material-ui/core"
import {
  Assignment,
  CheckCircle,
  Devices,
  Forum,
  School,
  WatchLater,
} from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import BenefitsCard from "./BenefitsCard"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2.5em",
    marginBottom: "2.5em",
  },
}))

function Benefits(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Grid spacing={3} container justify="center">
          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard
              icon={CheckCircle}
              caption={"Cursos reconhecidos pelo MEC"}
            />
          </Grid>

          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard icon={School} caption={"Cursos 100% EAD"} />
          </Grid>

          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard
              icon={WatchLater}
              caption={"Cursos intensivos e extensivos"}
            />
          </Grid>

          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard
              icon={Devices}
              caption="Ambiente de aprendizado online"
            />
          </Grid>

          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard icon={Assignment} caption="TCC opcional" />
          </Grid>

          <Grid item container justify="center" xs={6} md={4} lg={3}>
            <BenefitsCard icon={Forum} caption="Atendimento personalizado" />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Benefits
