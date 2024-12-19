
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Container from "@/shared/Container";
import { stars } from "@/assets/images";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Razu Sardar",
    role: "CEO of RSM",
    tag: "Fund Seeker",
    feedback: "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    role: "CTO of The Walt Disney Company",
    tag: "Investor",
   
    feedback: "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 3,
    name: "Floyd Miles",
    role: "MD of Starbucks",
    tag: "Investor",
   
    feedback: "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "HR of Gillette",
    tag: "Fund Seeker",
   
    feedback: "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
  {
    id: 5,
    name: "Darlene Robertson",
    role: "HOD of McDonald's",
    tag: "Investor",
  
    feedback: "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="bg-[#005397] text-white py-12 px-6">
      {/* Header Section */}
    <Container>
     

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-WorkSanser  font-bold">{testimonial.name}</h4>
                <span className="text-sm bg-[#A5ECBE] text-black font-WorkSanser px-2 py-1 rounded-full">
                  {testimonial.tag}
                </span>
              </div>
               <Image className="mb-2" src={stars} alt="stars"/>
              <p className="text-gray-600 text-sm font-WorkSanser mb-4">{testimonial.role}</p>
              <p className="text-gray-800 mb-4 font-WorkSanser">{testimonial.feedback}</p>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </div>
  );
};

export default TestimonialSlider;
