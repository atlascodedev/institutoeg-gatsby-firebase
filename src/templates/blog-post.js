import React from "react"

export default function BlogPost({ pageContext }) {
  console.log(pageContext)

//   pageContext.courseSyllabus.forEach((item, index) => {
//     console.log(item)
//   })

  return (
    <div>

        blog
      {/* <h1>{pageContext.courseName}</h1>

      <h2>{pageContext.courseArea + " - " + pageContext.courseLevel}</h2>

      <img src={pageContext.courseImage} alt="" />

      <img src={pageContext.courseEmec} alt="" />

      {pageContext.courseSyllabus.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <h3>{pageContext.courseDuration} horas de duração</h3> */}
    </div>
  )
}
