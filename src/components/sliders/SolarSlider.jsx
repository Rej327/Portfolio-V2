import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { Pagination, Autoplay } from "swiper";
import home from "../../assets/works/solar/home.png";
import sample from "../../assets/works/solar/sample.png";
import team from "../../assets/works/solar/team.png";
import about from "../../assets/works/solar/about.png";
import contact from "../../assets/works/solar/contact.png";

export default function SolarSlider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={home} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sample} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={team} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contact} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
