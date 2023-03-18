import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { Pagination, Autoplay } from "swiper";
import home from "../../assets/works/popularbooks/home.png";
import add from "../../assets/works/popularbooks/add.png";
import addData from "../../assets/works/popularbooks/adddata.png";
import update from "../../assets/works/popularbooks/update.png";
import del from "../../assets/works/popularbooks/delete.png";
import data from "../../assets/works/popularbooks/data.png";

export default function PopularBooksSlider() {
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
          <img src={add} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={addData} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={update} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={del} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={data} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
