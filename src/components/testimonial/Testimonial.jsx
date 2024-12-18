import Container from '@/shared/Container';
import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { shape } from '@/assets/images';
import Image from 'next/image';

const Testimonial = () => {
    return (
        <div className='bg-[#005397] h-52 pt-10'>
            <Container>
            <div className="flex flex-col md:flex-row justify-between gap-6 bg-[#005397] ">
        <div>
        <h3 className="text-xl text-center md:text-start text-[#7CE4A1] font-WorkSanser font-medium tracking-wide">
          Testimonial
        </h3>
        <h2 className="text-[20px] text-center md:text-start md:text-[42px] text-white font-WorkSanser font-semibold mt-2">
          For nearly 07 years, <br /> people have chosen VISAThing!
        </h2>
        </div>
   <div className="flex justify-center md:justify-start items-center text-gray-600 text-lg   font-WorkSanser">
            <div>
            <span className="mr-1 text-[#b3b4b7]">See our</span>
             <span className="font-bold underline text-[#DCDFEA] mr-1">
               2,000 reviews
             </span> 
             <span className="mr-1 text-[#b3b4b7]">on</span>
            </div>
             <div className="flex items-center">
             <Image src={shape} alt="Trustpilot Star" className="h-5 w-5" />
             <span className="font-semibold text-[#DCDFEA] ml-1">Trustpilot</span>
             </div>
           </div>
      </div>

            </Container>
                <TestimonialSlider/>
        </div>
   
    );
};

export default Testimonial;
