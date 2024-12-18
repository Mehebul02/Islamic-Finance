import { frame1, icon1, icon2, icon3, icon4, playButton } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import CustomInvertor from './CustomInvertor';
import CustomButton from '@/shared/CustomButton';

const ForInvestors = () => {
    return (
        <div className=' bg-white'>
            <h1 className='text-xl font-WorkSanser font-medium mb-8'>For Investors</h1>

           <div className=''>
           <Image className='mx-auto' src={frame1} alt='frame1'/>
           </div>

           {/* invertor icon  */}
           <CustomInvertor image={icon1} title="Explore Opportunities" description="Browse verified businesses seeking investment."/>
           <CustomInvertor image={icon2} title="Invest" description="Choose and invest in a business that fits your goals."/>
           <CustomInvertor image={icon3} title="Track Progress" description="Monitor your investment’s performance on our platform."/>
           <CustomInvertor image={icon4} title="Receive Returns" description="Get monthly repayments and profits directly."/>
          {/* button */}
           <div className="flex justify-center md:justify-start items-center gap-6 md:gap-10 mt-5">
          <CustomButton text="Start Investing" />
          {/* <button className="bg-primaryColor text-white rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3">sdfsdfsdf</button> */}

          <button className="flex items-center gap-2 text-black rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3 border border-primaryColor">
           <span><Image src={playButton} alt='play'/> </span>
           Tutorial
          </button>
        </div>
        
        </div>
    );
};

export default ForInvestors;