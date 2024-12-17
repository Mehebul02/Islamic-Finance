"use client";
import { slide1, slide2, slide3, slide4, slide5, slide6, slide7 } from "@/assets/images";
import dynamic from "next/dynamic";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Dynamically import Swiper components
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

const LogoSlider = () => {
    const slides = [
        { id: 1, src: slide1, alt: "slider1" },
        { id: 2, src: slide2, alt: "slider2" },
  
      ];
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1} // Show one slide at a time
        centeredSlides={true}
        spaceBetween={30} // Space between slides
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Slide changes every 3 seconds
          disableOnInteraction: false, // Autoplay doesn't stop when interacting with the slider
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module here
        className="mySwiper"
      >
        {/* Each slide contains two images side by side */}
        {/* Map through slides */}
    
        <SwiperSlide>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex justify-center items-center">
              <Image src={slide1} alt="slider1" className="object-contain w-40 h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={slide2} alt="slider2" className="object-contain w-40 h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={slide3} alt="slider2" className="object-contain w-40 h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={slide4} alt="slider2" className="object-contain w-40 h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={slide5} alt="slider2" className="object-contain w-40 h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={slide6} alt="slider2" className="object-contain w-40 h-auto" />
            </div>
        
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
