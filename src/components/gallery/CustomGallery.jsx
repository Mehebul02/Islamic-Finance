import Image from 'next/image';
import React from 'react';

const CustomGallery = ({image1,title,number}) => {
    return (
        <div className=' grid grid-cols-4 gap-6 mt-10'>
             
             <Image className='' src={image1} alt='image1'/>
                        <div className='flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                            <h1>{title}</h1>
                            <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>{number}</h1>
                        </div>
                        <Image className='' src={image1} alt='image1'/>
                        <div className=' bg-[#7CE4A1] flex flex-col space-y-40 border px-4 pt-4 rounded-md font-WorkSanser'>
                            <h1>{title}</h1>
                            <h1 className='text-2xl md:text-[70px] text-[#111322] font-medium'>{number}</h1>
                        </div>
        </div>
    );
};

export default CustomGallery;