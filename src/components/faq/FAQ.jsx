import Container from '@/shared/Container';
import CustomButton from '@/shared/CustomButton';
import CustomButton2 from '@/shared/CustomButton2';
import React from 'react';
import According from './According';

const FAQ = () => {
    return (
        <Container>
           <div className='lg:w-[50%] mx-auto space-y-8'>
           <div className='text-center mt-16'>
            <h3 className="text-xl  text-secondaryColor font-WorkSanser font-medium ">
             FAQ
            </h3>
            <h1 className='text-[25px] lg:text-[42px] text-[#111322] font-WorkSanser font-semibold'>Frequently asked questions</h1>
            </div>
            <div className='  grid grid-cols-4 lg:grid-cols-5 gap-3 text-center'>
                <CustomButton text='Investor'/>
                <CustomButton2 text='Business'/>
                <CustomButton2 text='Business'/>
                <CustomButton2 text='Business'/>
                <CustomButton2 text='Business'/>
                

            </div>
           </div>
           {/* Faq  */}
           <According/>
        </Container>
    );
};

export default FAQ;