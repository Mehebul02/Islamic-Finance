import { banking, bannerMen, chart, invertor } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    // main container
    <div className="flex justify-between items-center gap-16">
      {/* 1st section  */}
      <div className="w-[50%] flex justify-between items-center">
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
      <div className="w-[50%]">
        <div>
        <div className="w-[400px] flex items-center gap-3 rounded-full bg-[#00233F] px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26F3E7]">
            <span className="text-[#00233F] font-semibold text-lg">حلال</span>
          </div>
          <span className="text-lg font-WorkSanser text-[#28D454]">
            Islamic Finance, Shari’a Approved
          </span>
        </div>
        </div>
        <h1 className="text-[60px] text-[#111322] font-WorkSanser font-bold">Smart Investments for Verified SMES</h1>
       
      </div>
    </div>
  );
};

export default Hero;
