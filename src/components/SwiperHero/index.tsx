"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const SwiperHero = () => {
  return (
    <div className="hero-swiper">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Image src="/images/mock/1.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/mock/2.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/mock/3.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHero;
