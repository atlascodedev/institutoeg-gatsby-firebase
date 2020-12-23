import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import PhoneIcon from "@material-ui/icons/Phone"
import FavoriteIcon from "@material-ui/icons/Favorite"
import PersonPinIcon from "@material-ui/icons/PersonPin"
import HelpIcon from "@material-ui/icons/Help"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"
import ThumbDown from "@material-ui/icons/ThumbDown"
import ThumbUp from "@material-ui/icons/ThumbUp"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import CourseTables from "../CourseTable"
import styled from "styled-components"
import { Fade, Grid } from "@material-ui/core"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
            <div>{children}</div>
          </Fade>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },

  syllabusContainer: {
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: "33.3333% 33.3333% 33.3333%",
  },

  syllabusHeading: {
    width: "100%",
    backgroundColor: "#333",
    padding: "10px",
    textAlign: "center",
    fontSize: "1.15rem",
    fontOpticalSizing: "auto",
    color: "white",
    fontWeight: 800,
  },

  emecPicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const SyllabusItem = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 900;
  background-color: whitesmoke;
  padding: 12px;
  font-size: 10px;
  margin: 0;
  color: #333;
`

const SyllabusContainer = styled.div`
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #fff;
  width: 100%;
  height: 100%;
`

export default function CourseTabs({ syllabus, duration, emec }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const syllabusTest = [
    "Introdução à alergia",
    "Testes conduzidos",
    "Amostragem",
    "Infectologia",
    "Rinologia",
    "TCC (Opcional)",
    "Whatever Else Should I put in here",
    "Storm",
    "Revolting",
    "Black Clouds",
    "In isolation",
    "My name",
    "Say it",
    "And don't you forget that",
  ]

  console.log(syllabus, "hwere")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "#fff" }}
        elevation={1}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Matriz curricular" {...a11yProps(0)} />
          <Tab label="Modalidade" {...a11yProps(1)} />
          <Tab label="Pré-requisitos" {...a11yProps(2)} />
          <Tab label="E-MEC" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <div className={classes.syllabusHeading}>Matriz curricular</div>
          <div className={classes.syllabusContainer}>
            {syllabus.map((item, index) => (
              <SyllabusItem
                style={{
                  backgroundColor: index % 2 == 1 ? "whitesmoke" : "white",
                }}
              >
                {item}
              </SyllabusItem>
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SyllabusContainer>
          <div>{`Conclusão à partir de ${duration} horas`}</div>
        </SyllabusContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SyllabusContainer>
          <div>{`Pré-requisitos: diploma de medicina válido no Brasil`}</div>
        </SyllabusContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SyllabusContainer>
          <div className={classes.emecPicture}>
            <img
              style={{ width: "100%" }}
              src={emec}
              alt="Printscreen do certificado do MEC para este curso"
            />
          </div>
        </SyllabusContainer>
      </TabPanel>
    </div>
  )
}
