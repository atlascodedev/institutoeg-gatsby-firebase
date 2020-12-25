import {
  Box,
  Divider,
  Fade,
  Grid,
  makeStyles,
  Slide,
  SvgIcon,
} from "@material-ui/core"
import {
  ArrowDownwardRounded,
  ArrowUpward,
  ArrowUpwardRounded,
} from "@material-ui/icons"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CourseMenuContainer = styled.div`
  transition: all 0.5s ease;
  box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.25);
  max-width: 325px;
  border-radius: 5px;
  margin-top: 1em;
  overflow: hidden;
  padding: ${props => (props.open ? "2em" : "0px")};

  margin-bottom: 1em;
  @media (min-width: 768px) {
    max-width: ${props => (props.open ? "450px" : "425px")};
  }

  @media (min-width: 1024px) {
    max-width: ${props => (props.open ? "1024px" : "550px")};
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    fontFamily: theme.typography.fontFamily,
  },

  courseMenuItem: {
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "0.85em",
  },

  courseMenuArrow: {
    transition: "all 0.5s ease",
    fill: theme.palette.primary.main,
    fontSize: "1.25em",
    transform: props => (props.open ? "rotate(540deg)" : "rotate(0deg)"),
  },

  courseMenuContainer: {
    transition: "all 0.5s ease-in-out",
    willChange: "max-height",
    maxHeight: props => (props.open ? "2000px" : "0px"),
  },
}))

function CourseMenu({ courses }) {
  const testArray = [
    "Alergia e imunologia - medicina",
    "Ginecologia e obstetrícia - medicina",
    "Medicina do trabalho - medicina",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test4",
    "test5",
    "test6",
  ]

  const courseArray = courses.map((edge, index) => {
    return edge.node
  })

  const [open, setOpen] = React.useState(false)

  const styleProps = { open: open }

  const classes = useStyles(styleProps)

  return (
    <div className={classes.root}>
      <CourseMenuContainer open={open}>
        <Box
          onClick={() => setOpen(prevState => !prevState)}
          style={{ cursor: "pointer" }}
        >
          <Box
            my={2}
            mx={2}
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <SvgIcon
              className={classes.courseMenuArrow}
              component={ArrowUpwardRounded}
            />
            <Box
              fontSize={"0.75em"}
              color={"#9e9d9d"}
              pl={2}
              pr={2}
              display="flex"
              alignItems="center"
            >
              <div>Selecione o curso ou passe as opções abaixo</div>
            </Box>
          </Box>

          <Box my={2}>
            <Fade in={open} timeout={{ enter: 500, exit: 500 }}>
              <Divider></Divider>
            </Fade>
          </Box>
        </Box>
        <Grid
          className={classes.courseMenuContainer}
          spacing={3}
          container
          justify="center"
        >
          {courseArray.map((course, indexCourse) => (
            <Grid
              xs={12}
              md={4}
              key={indexCourse}
              item
              container
              justify="center"
            >
              <Fade in={open} timeout={{ enter: 1000, exit: 500 }}>
                <div className={classes.courseMenuItem}>
                  <Link
                    className={classes.courseMenuItem}
                    to={course.courseFullSlug}
                  >
                    {course.courseName + " - " + course.courseArea}
                  </Link>
                </div>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </CourseMenuContainer>
    </div>
  )
}

export default CourseMenu
