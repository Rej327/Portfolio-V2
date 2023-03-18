import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { Pagination, Autoplay } from "swiper";
import head from "../../assets/works/regavana/head.png";
import nav from "../../assets/works/regavana/Navigation.png";
import sampleComp from "../../assets/works/regavana/samplecomp.png";
import addKey from "../../assets/works/regavana/addeventkeypass.png";
import addEvent from "../../assets/works/regavana/addevent.png";
import loading from "../../assets/works/regavana/loading.png";
import reach from "../../assets/works/regavana/reach.png";

export default function RegavanaSlider() {
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
          <img src={head} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nav} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sampleComp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={addKey} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={addEvent} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={loading} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reach} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
