
import { logo } from '@/assets/images';
import Container from '@/shared/Container';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col gap-2 space-y-5 justify-center items-center h-screen'>
            <Image src={logo} alt='notFound' className='max-w-60'/>
            <p className='text-xl font-semibold'>Oops! Page not found</p>


            <CustomButton className='flex items-center gap-1 bg-[#1C60B0] text-white hover:bg-[#1C60B0] ' text='Back To Home' href='/'></CustomButton>
        </div>
    );
};

export default NotFoundPage;