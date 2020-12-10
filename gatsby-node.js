const axios = require("axios")
const path = require("path")
const { converToSlug } = require("./util_node/index")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const allCourses = await axios.get(
    "http://localhost:5001/gnosis-webapp/us-central1/api/courses"
  )

  const allCourseAreas = await axios.get(
    "http://localhost:5001/gnosis-webapp/us-central1/api/courseAreas"
  )

  allCourseAreas.data.forEach(courseArea => {
    const node = {
      courseAreaName: courseArea.courseAreaName,
      courseAreaLevel: courseArea.courseAreaLevel,
      type: `${courseArea.courseAreaName}${courseArea.uid}`,
      id: createNodeId(`CourseArea-${courseArea.courseAreaName}`),
      internal: {
        type: "courseArea",
        contentDigest: createContentDigest(courseArea),
      },
    }
    actions.createNode(node)
  })

  allCourses.data.forEach(course => {
    const node = {
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      courseLevel: course.courseLevel,
      courseArea: course.courseArea,
      courseDuration: course.courseDuration,
      courseImage: course.courseImage,
      courseEmec: course.courseEmec,
      courseSyllabus: course.courseSyllabus,
      type: `${course.courseName}${course.uid}`,
      id: createNodeId(`Course-${course.courseName}`),
      internal: {
        type: "course",
        contentDigest: createContentDigest(course),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allCourses = await axios.get(
    "http://localhost:5001/gnosis-webapp/us-central1/api/courses"
  )

  console.log(allCourses)

  allCourses.data.forEach(course => {
    const courseAreaToSlug = converToSlug(course.courseArea)
    const courseLevelToSlug = converToSlug(course.courseLevel)

    createPage({
      path: `${courseLevelToSlug}/${courseAreaToSlug}/${course.courseSlug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        courseLevel: course.courseLevel,
        courseArea: course.courseArea,
        courseDuration: course.courseDuration,
        courseImage: course.courseImage,
        courseEmec: course.courseEmec,
        courseSyllabus: course.courseSyllabus,
      },
    })
  })
}
