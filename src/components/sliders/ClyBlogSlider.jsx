import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { Pagination, Autoplay } from "swiper";
import home from "../../assets/works/clyblog/Home.png";
import nav from "../../assets/works/clyblog/Navigation.png";
import about from "../../assets/works/clyblog/About.png";
import add from "../../assets/works/clyblog/Add.png";
import fs from "../../assets/works/clyblog/filestack.png";
import contact from "../../assets/works/clyblog/Contact.png";

export default function ClyBlogSlider() {
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
          <img src={nav} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={about} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={add} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fs} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={contact} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
