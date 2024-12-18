import React from 'react';
import CustomInvertor from './CustomInvertor';
import Image from 'next/image';
import { frame1, icon1, icon5, icon6, icon7, icon8, playButton } from '@/assets/images';
import CustomButton from '@/shared/CustomButton';

const ForBusinesses = () => {
    return (
        <div className=' bg-white'>
        <h1 className='text-xl font-WorkSanser font-medium mb-8'>For Businesses</h1>

       <div className=''>
       <Image className='mx-auto' src={frame1} alt='frame1'/>
       </div>

       {/* invertor icon  */}
       <CustomInvertor image={icon5} title="Apply Online" description="Submit your financing application online."/>
       <CustomInvertor image={icon6} title="Get Verified" description="Our team reviews and approves your application."/>
       <CustomInvertor image={icon7} title="Listed for Funding" description="Approved businesses are listed for investors."/>
       <CustomInvertor image={icon8} title="Receive Funding" description="Get the capital needed to grow your business."/>
     {/* button */}
     <div className="flex justify-center md:justify-start items-center gap-6 md:gap-10 mt-5">
          <CustomButton text="Get Funded" />
          {/* <button className="bg-primaryColor text-white rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3">sdfsdfsdf</button> */}

          <button className="flex items-center gap-2 text-black rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3 border border-primaryColor">
           <span><Image src={playButton} alt='play'/> </span>
           Tutorial
          </button>
        </div>
    </div>
    );
};

export default ForBusinesses;