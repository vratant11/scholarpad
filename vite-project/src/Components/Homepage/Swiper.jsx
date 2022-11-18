import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper id="swiper1"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperslide1">Slide 1</SwiperSlide>       
      </Swiper>
    </>
  );
}