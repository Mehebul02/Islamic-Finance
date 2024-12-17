import { banking, bannerMen, chart, invertor } from '@/assets/images';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        // main container 
        <div className='flex justify-between items-center'>
           {/* 1st section  */}
           <div className='flex justify-between items-center'>
          <div>
            <Image src={banking} alt='banking'/>
            <Image src={invertor} alt='invertor'/>
          </div>
          <div>
            <Image src={bannerMen} alt='banking'/>
            <Image src={chart} alt='chart'/>
          </div>
           </div>
           {/* 2nd section  */}
           <div>
            2222
           </div>
        </div>
    );
};

export default Hero;