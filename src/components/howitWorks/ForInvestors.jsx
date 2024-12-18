import { frame1, icon1, icon2, icon3, icon4 } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import CustomInvertor from './CustomInvertor';

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
        </div>
    );
};

export default ForInvestors;