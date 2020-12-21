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
import { nanoid } from "nanoid"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const CourseCarousel = ({ courses }) => {
  const swiperPagination = React.useRef(null)

  return (
    <div>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={1}
        slidesPerView={1}
        autoplay={true}
        slideToClickedSlide={true}
        navigation={false}
        centerInsufficientSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: courses.length >= 3 ? 3 : 1,
            spaceBetween: 20,
            navigation: true,
          },
        }}
        pagination={courses.length >= 3 ? { clickable: true } : false}
        onSlideChange={() => null}
        // onSwiper={swiper => console.log(swiper)}
      >
        {courses.map((edge, index) => {
          return (
            <SwiperSlide key={nanoid()}>
              {({ isActive }) => (
                <CourseCard
                  courseDescription={edge.node.courseDescription}
                  courseTitle={edge.node.courseName}
                  courseImage={edge.node.courseImage}
                  courseLink={edge.node.courseFullSlug}
                  active={isActive}
                ></CourseCard>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div id="swiper-pagination"></div>
    </div>
  )
}

export default CourseCarousel
