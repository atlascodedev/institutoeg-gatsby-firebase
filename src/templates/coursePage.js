import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  SvgIcon,
} from "@material-ui/core"
import {
  AccountBalance,
  Check,
  Laptop,
  LocalHospital,
  QuestionAnswer,
  School,
} from "@material-ui/icons"
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import CourseContactForm from "../components/AppComponents/CourseContactForm"
import CourseTabs from "../components/AppComponents/CouseTabs"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"

const CourseBackgroundImage = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 150px;
  }
`



const useStyles = makeStyles(theme => ({
  ancientRoot: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: "#fff",
  },

  root: {
    filter: "brightness(100%)",
  },
  presentationText: {
    color: theme.palette.secondary.main,

    fontSize: "0.85rem",
    marginTop: "1rem",
    fontWeight: 900,
  },

  courseHeroGrid: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "CENTER",
    justifyContent: "center",
    color: "white",
    fontSize: "1.15rem",
  },

  courseDescriptionContainer: {
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  courseHeroGridTitle: {
    justifySelf: "center",
    alignSelf: "center",
  },

  courseDescription: {
    marginTop: "0rem",
    marginBottom: "0rem",
    paddingTop: "0rem",
    paddingBottom: "0rem",
    fontWeight: "normal",
    color: theme.palette.secondary.main,
  },

  courseGridAreaLevel: {
    justifySelf: "start",
    alignSelf: "start",
  },

  courseHeroContainer: {
    position: "relative",
    fontSize: "10px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },
  },

  courseTabsContainer: {
    padding: "2rem 1.5rem 1.5em 2rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  courseBenefitsContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: "2rem 1.5rem 1.5rem 2rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  coursesFormContainer: {
    marginTop: "2rem",
    // marginBottom: "2rem",
    padding: "2rem 1.5rem 1.5rem 2rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  aboutCourse: {
    textAlign: "center",
    fontSize: "1.35rem",
    paddingBottom: "1.5rem",
    color: theme.palette.primary.main,
  },

  benefitsIcon: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
  },

  benefitsIconPaper: {
    padding: "1rem 0.25rem 1rem 0.25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
  },

  benefitsText: {
    paddingTop: "0.5rem",
    width: "75%",
    textAlign: "center",
  },

  presentationContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: "2rem 1.5rem 1.5rem 2rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}))
export default function CoursePage({ pageContext, data }) {
  const classes = useStyles()

  console.log(
    `${pageContext.courseName} - ${pageContext.courseArea} - ${pageContext.courseLevel}`
  )

  let fullCourseTitle = `${pageContext.courseName} - ${pageContext.courseArea} - ${pageContext.courseLevel}`

  return (
    <div className={classes.ancientRoot}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Instituto Educacional Gnosis - ${fullCourseTitle}`}</title>
      </Helmet>
      <Navbar></Navbar>
      <CourseBackgroundImage image={pageContext.courseImage}>
        <Container className={classes.courseHeroContainer}>
          <div className={classes.courseHeroGrid}>
            <div>
              <h1>{pageContext.courseName}</h1>
            </div>

            <div className={classes.cousrseGridAreaLevel}>
              <h1>
                {`${pageContext.courseArea} - ${pageContext.courseLevel}`}
              </h1>
            </div>
          </div>
        </Container>
      </CourseBackgroundImage>

      <div>
        <Container className={classes.presentationContainer}>
          <div>
            <h2 className={classes.aboutCourse}>Apresentação</h2>
          </div>

          <div className={classes.presentationText}>
            {pageContext.courseDescription}
          </div>
        </Container>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F6F6F6",
        }}
      >
        <Container className={classes.courseTabsContainer}>
          <div>
            <h2 className={classes.aboutCourse}>Sobre o curso</h2>
          </div>

          <CourseTabs
            emec={pageContext.courseEmec}
            duration={pageContext.courseDuration}
            syllabus={pageContext.courseSyllabus}
          ></CourseTabs>
        </Container>
      </div>
      <div style={{ background: "white" }}>
        <div className={classes.courseBenefitsContainer}>
          <Container>
            <div>
              <h2 className={classes.aboutCourse}>Benefícios</h2>
            </div>

            <div className={classes.benefits}>
              <Grid spacing={3} container justify="center">
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <AccountBalance></AccountBalance>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Cursos reconhecidos pelo MEC
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <Check></Check>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Certificado com validade nacional
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <School></School>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Outorga título acadêmico de especialista
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <Laptop></Laptop>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Sistema de aprendizado virtual
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <LocalHospital></LocalHospital>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Qualifica pleno exercício
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  item
                  container
                  justify="center"
                >
                  <Paper className={classes.benefitsIconPaper} elevation={3}>
                    <SvgIcon className={classes.benefitsIcon}>
                      <QuestionAnswer> </QuestionAnswer>
                    </SvgIcon>
                    <div className={classes.benefitsText}>
                      Suporte dedicado 24 horas
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>

      <div
        style={{ background: "#F6F6F6" }}
        className={classes.coursesFormContainer}
      >
        <div>
          <h2 className={classes.aboutCourse}>
            Preencha o formulário e de início à sua inscrição hoje mesmo!
          </h2>
        </div>

        <div style={{ background: "#FFF" }}>
          <CourseContactForm courseInfo={fullCourseTitle}></CourseContactForm>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
