
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "@/shared/Container";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
} from "@/assets/images";

const logoSlider = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3 },
  { id: 4, src: slide4 },
  { id: 5, src: slide5 },
  { id: 6, src: slide6 },
];

const LogoSlider = () => {
  return (
    <div className="text-white py-12 px-6">
      <Container>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0} // Reduced gap to 0 for no space between slides
          slidesPerView={5} // Increased slides for a compact layout
          loop={true}
          navigation={false} // Navigation buttons disabled
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 0 },
            1024: { slidesPerView: 5, spaceBetween: 0 },
          }}
        >
          {logoSlider.map((slide) => (
            <SwiperSlide key={slide.id} className="flex justify-center items-center">
              <Image
                src={slide.src}
                alt={`slider-${slide.id}`}
                className="object-contain w-40 h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default LogoSlider;
