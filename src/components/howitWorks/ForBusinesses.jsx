import React from 'react';
import CustomInvertor from './CustomInvertor';
import Image from 'next/image';
import { frame1, icon1, icon5, icon6, icon7, icon8 } from '@/assets/images';

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
    </div>
    );
};

export default ForBusinesses;