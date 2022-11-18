import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="img" id="img1" src="src\Images\Untitled-1.jpg" alt="Error" /></SwiperSlide>
        <SwiperSlide><img className="img" src="src\Images\4.jpg" alt="Error" /></SwiperSlide>
        <SwiperSlide><img className="img" src="src\Images\1.jpeg" alt="Error" /></SwiperSlide>
      </Swiper>
    </>
  );
}