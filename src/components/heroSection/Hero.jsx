import { banking, bannerMen, chart, invertor, shape } from "@/assets/images";
import CustomButton from "@/shared/CustomButton";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    // main container
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 px-4 md:px-8 bg-white">
      {/* 1st section  */}
      <div className="md:w-[50%] flex justify-between items-center">
        <div>
          <Image src={banking} alt="banking" />
          <Image src={invertor} alt="invertor" />
        </div>
        <div>
          <Image src={bannerMen} alt="banking" />
          <Image src={chart} alt="chart" />
        </div>
      </div>
      {/* 2nd section  */}
      <div className="md:w-[50%] space-y-5 ">
        <div>
          <div className="md:w-[400px] flex items-center gap-3 rounded-full bg-[#00233F] px-4 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26F3E7]">
              <span className="text-[#00233F] font-semibold text-lg">حلال</span>
            </div>
            <span className="text-lg font-WorkSanser text-[#28D454]">
              Islamic Finance, Shari’a Approved
            </span>
          </div>
        </div>
        <h1 className=" text-[30px] text-center md:text-[55px] text-[#111322] font-WorkSanser font-bold">
          Smart Investments for Verified SMES
        </h1>
        {/* button  */}
        <div className="flex justify-center md:justify-start items-center gap-6 md:gap-10">
          <CustomButton text="Start Investing" />
          {/* <button className="bg-primaryColor text-white rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3">sdfsdfsdf</button> */}

          <button className="text-black rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3 border border-primaryColor">
            Get Funded
          </button>
        </div>

        <div className="flex justify-center md:justify-start items-center text-gray-600 text-lg gap-6 font-WorkSanser">
         <div>
         <span className="mr-1">See our</span>
          <span className="font-bold underline text-black mr-1">
            2,000 reviews
          </span> 
          <span className="mr-1">on</span>
         </div>
          <div className="flex items-center">
          <Image src={shape} alt="Trustpilot Star" className="h-5 w-5" />
          <span className="font-semibold text-black ml-1">Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
