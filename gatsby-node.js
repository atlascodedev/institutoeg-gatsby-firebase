const axios = require("axios")
const { nanoid } = require("nanoid")
const path = require("path")
const { converToSlug } = require("./util_node/index")

if (process.env.NODE_ENV !== "production") {
  axios.default.defaults.baseURL =
    "http://localhost:5001/gnosis-webapp/us-central1/api"
} else {
  axios.default.defaults.baseURL =
    "https://us-central1-gnosis-webapp.cloudfunctions.net/api"
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /^@?firebase(\/(.+))?/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  let allCourses = await axios.get("/courses")

  const courseDummyData = {
    data: [
      {
        uid: "dummyUid" + nanoid(),
        courseName: "dummyCourse",
        courseDescription: "dummyDescription",
        courseLevel: "dummyLevel",
        courseArea: "dummyArea",
        courseDuration: "dummyDuration",
        courseImage: "dummyImagePath",
        courseEmec: "dummyEmecImagePath",
        courseSyllabus: "dummySyllabusArray",
        courseSlug: "dummySlug",
        courseFullSlug: "dummySlugFull",
      },
    ],
  }

  if (allCourses.data.length <= 0) {
    allCourses = courseDummyData
  }

  console.log(allCourses.data)

  allCourses.data.forEach(course => {
    const node = {
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      courseLevel: course.courseLevel,
      courseArea: course.courseArea,
      courseDuration: course.courseDuration,
      courseImage: course.courseImage,
      courseEmec: course.courseEmec,
      courseSlug: course.courseSlug,
      courseFullSlug: course.courseFullSlug,
      courseSyllabus: course.courseSyllabus,
      type: `${course.courseName}${course.uid}`,
      id: createNodeId(`Course-${course.uid}`),
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

  const allCourses = await axios.get("/courses")

  allCourses.data.forEach(course => {
    const courseAreaToSlug = converToSlug(course.courseArea)
    const courseLevelToSlug = converToSlug(course.courseLevel)

    createPage({
      path: `${courseLevelToSlug}/${courseAreaToSlug}/${course.courseSlug}`,
      component: path.resolve(`./src/templates/coursePage.js`),
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
