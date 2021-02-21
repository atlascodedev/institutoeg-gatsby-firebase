import React from "react"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
import "../../../../styles/customSwiper.css"
import CourseCard from "../CourseCard"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const CourseCarousel = ({ courses }) => {
  const [paginationVisible, setPaginationVisible] = React.useState(false)

  React.useEffect(() => {
    if (courses.length >= 3) {
      setPaginationVisible(true)
    } else [setPaginationVisible(false)]
  }, [])

  return (
    <div>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={true}
        slideToClickedSlide={true}
        navigation={false}
        centerInsufficientSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: courses.length >= 3 ? 3 : 1,
            spaceBetween: 20,
            navigation: {},
            pagination: { clickable: true },
          },
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => null}
      >
        {courses.map((edge, index) => {
          return (
            <SwiperSlide>
              {({ isActive }) => (
                <CourseCard
                  courseDescription={edge.node.courseDescription}
                  courseTitle={edge.node.courseName}
                  courseImage={edge.node.courseImage}
                  courseArea={edge.node.courseArea}
                  courseLink={edge.node.courseFullSlug}
                  active={isActive}
                ></CourseCard>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CourseCarousel
