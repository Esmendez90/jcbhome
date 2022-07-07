import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "./images.json";

function TeamImages() {
  return (
    <>
      <Swiper
        // install Swiper modules
       
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}effect="coverflow"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map(({ id, className, src, alt, member, title }) => (
          <SwiperSlide key={id}>
            <img className={className} src={src} alt={alt} />
            <p className="member-title">
              {member} <br/><span>{title}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default TeamImages;
