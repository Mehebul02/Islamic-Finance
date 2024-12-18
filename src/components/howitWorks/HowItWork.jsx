import Container from '@/shared/Container';
import React from 'react';
import ForBusinesses from './ForBusinesses';
import ForInvestors from './ForInvestors';

const HowItWork = () => {
    return (
        <div className="bg-[#ECF8F5]   h-screen">
        <Container>
          {/* 1st section  */}
          <div >
            {/* 1st section  */}
          <div className=" pt-16">
            <div className='bg-white px-4 py-4 rounded-lg'>
            <h3 className="text-xl text-center md:text-start text-[#7CE4A1] font-WorkSanser font-medium tracking-wide">
          How it Works
      </h3>
      <h1 className='text-[42px] w-96 font-WorkSanser font-semibold'>Our Process for Investors and Businesses</h1>
            </div>
          
          </div>

          {/* 2nd section  */}
          <div className='flex flex-col md:flex-row justify-between items-center mt-14'>
          {/* For Investors */}
          <div className='w-[50%] bg-white px-6 pt-4 rounded-md'>
         <ForInvestors/>
          </div>
          {/* For Businesses */}
          <div>
          <ForBusinesses/>
          </div>
          </div>
          </div>
        </Container>
      </div>
    );
};

export default HowItWork;