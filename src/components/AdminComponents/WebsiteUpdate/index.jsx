import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    fontFamily: "Graduate",
    maxWidth: "40vh",
  },
}))

function WebsiteUpdate({ open, handleClose, callback }) {
  const classes = useStyles()

  const handleCallback = () => {
    if (typeof callback === "function" && callback) {
      callback()
      handleClose()
    } else {
      handleClose()
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <Dialog
          style={{ textAlign: "center" }}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle
            style={{
              fontFamily: "Graduate",
              fontSize: "1.35em",
              fontWeight: 700,
            }}
          >
            Atualizar website
          </DialogTitle>

          <Box display="flex" justifyContent="center">
            <Box borderTop={"solid 1px #acacac"} width={"80%"}></Box>
          </Box>
          <DialogContent>
            <Container>
              Está ação sincronizará os dados visíveis no painel administrativo
              com o website de acesso público. Se deseja efetuar esta ação,
              clique em confirmar.
              <Box py={3}>
                Neste processo o website público ainda estará disponível, o
                servidor fará a limpeza automática do cache e a otimização das
                páginas para melhorar o resultado de seu website nas pesquisas
                do Google, especialmente se você usa Google Ads. A sincronização
                é automática e leva de 30 segundos a 3 minutos, dependendo da
                quantidade de conteúdo existente para ser sincronizado. Por
                favor, espere até 5 minutos antes de executar esta ação
                novamente.
              </Box>
            </Container>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="primary">
              Cancelar
            </Button>

            <Button
              onClick={handleCallback}
              variant="contained"
              style={{ backgroundColor: "#F15D3C", color: "#FFF" }}
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default WebsiteUpdate
