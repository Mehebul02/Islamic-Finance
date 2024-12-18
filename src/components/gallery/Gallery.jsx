import { image1, image2, image3, image4 } from '@/assets/images';
import Container from '@/shared/Container';
import Image from 'next/image';
import React from 'react';
import CustomGallery from './CustomGallery';

const Gallery = () => {
    return (
       <Container>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
            <Image className='' src={image1} alt='image1'/>
            <div className='flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                <h1>New investors <br /> last month</h1>
                <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>3,964</h1>
            </div>
            <Image className='' src={image2} alt='image1'/>
            <div className=' bg-[#7CE4A1] flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                <h1>Unique investments <br /> last month</h1>
                <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>8,457</h1>
            </div>
            <div className=' bg-[#7CE4A1] flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                <h1>Total invested  <br /> last month</h1>
                <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>$7.5m</h1>
            </div>
            <Image className='' src={image3} alt='image1'/>
            <div className='flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                <h1>Site visitors <br /> last month</h1>
                <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>308k</h1>
            </div>
            <Image className='' src={image4} alt='image1'/> 
        </div>
       </Container>
    );
};

export default Gallery;