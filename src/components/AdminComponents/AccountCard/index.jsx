import {
  Paper,
  Grid,
  Button,
  Divider,
  Box,
  Fade,
  Typography,
} from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import AvatarChangePicture from "../AvatarChangePicture"

const AccountCardBase = props => {
  return (
    <Paper elevation={props.elevation ? props.elevation : 3} {...props}>
      {props.children}
    </Paper>
  )
}

const AccountCardStyled = styled(AccountCardBase)`
  position: absolute;
  top: 100%;
  width: calc(100vw - 12px * 2);
  max-height: calc(100vh -62px - 100px);
  z-index: 2000;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 0;
  transition: all 3s ease;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  opacity: ${props => (props.visible ? "1" : "0")};
  @media (min-width: 768px) {
    width: 364px;
    top: 100%;
    margin: 0;
    left: initial;
    right: 2%;
  }
  @media (min-width: 1920px) {
    top: 100%;
  }
`

function AccountCard(props) {
  return (
    <div>
      <Fade
        in={props.visible}
        style={{ transitionDelay: props.visible ? "100ms" : "0ms" }}
      >
        <AccountCardStyled visible={props.visible ? 1 : 0}>
          <Grid container justify="center">
            <Grid item>
              <Box my={2}>
                <AvatarChangePicture />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Box fontWeight={600} textAlign="center">
                {props.email + " - user role"}
              </Box>
            </Grid>
            <Grid item>
              <Box
                mt={1}
                fontSize={"0.75em"}
                textAlign="center"
                color={"#8a8a8a"}
              >
                {props.email + "user name"}
              </Box>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Button variant="outlined">
                  <Box color={"#8a8a8a"} fontSize={"0.65em"}>
                    Gerenciar configurações de conta
                  </Box>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box mt={2} mb={2}>
            <Divider />
          </Box>
          <Grid container justify="center">
            <Grid item>
              <Box mb={2} mt={1}>
                <Button
                  onClick={props.logout}
                  variant="contained"
                  style={{ backgroundColor: "#003358", color: "white" }}
                  size="small"
                >
                  Logout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </AccountCardStyled>
      </Fade>
    </div>
  )
}

export default AccountCard
