
import { logo } from '@/assets/images';
import CustomButton from '@/shared/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col gap-2 space-y-5 justify-center items-center h-screen'>
            <Image src={logo} alt='notFound' className='max-w-60'/>
            <p className='text-xl font-WorkSanser font-semibold'>Oops! Page not found</p>

<Link href='/'>

            <CustomButton className='flex items-center gap-1 bg-[#1C60B0] text-white hover:bg-[#1C60B0] ' text='Back To Home' ></CustomButton>
</Link>
        </div>
    );
};

export default NotFoundPage;