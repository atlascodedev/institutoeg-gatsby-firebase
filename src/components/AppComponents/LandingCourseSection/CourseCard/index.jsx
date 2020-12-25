import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CourseCardPaper = styled.div`
  transition: all 0.8s ease;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
  padding-bottom: 1em;
  border-radius: 7px;
  height: auto;
  overflow: hidden;
  width: 325px;
  filter: ${props => (props.active ? "opacity(1)" : "opacity(0.3)")};
  transform: ${props => (props.active ? "scale(1)" : "scale(0.5)")};

  @media (min-width: 768px) {
    width: 280px;
  }
`

const CourseCardPicture = styled.div`
  background-image: ${props =>
    props.image
      ? `url(${props.image})`
      : "url(https://via.placeholder.com/350x150)"};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 220px;
  width: 100%;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`

const CourseCardDescripton = styled.div`
  padding: 1em;
  margin: 0.65em;
  text-align: center;
  font-size: 0.85em;
`

const CourseCardTitle = styled.div`
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  font-weight: 600;
  font-size: 1.25em;
`

function CourseCard({
  active,
  courseImage,
  courseDescription,
  courseTitle,
  courseLink,
  courseArea,
}) {
  return (
    <CourseCardPaper active={active}>
      <CourseCardPicture
        image={courseImage ? courseImage : null}
      ></CourseCardPicture>
      <CourseCardTitle>
        {courseTitle ? courseTitle : "Placeholder title"}
      </CourseCardTitle>
      <CourseCardDescripton>
        <Typography>{`Curso de ${
          courseArea ? courseArea : "placeholder area"
        }`}</Typography>
      </CourseCardDescripton>

      <Button variant="contained" color="primary">
        <Link
          style={{ textDecoration: "none", color: "#FFF" }}
          to={courseLink ? `/${courseLink}` : "/"}
        >
          Saiba mais
        </Link>
      </Button>
    </CourseCardPaper>
  )
}

export default CourseCard
