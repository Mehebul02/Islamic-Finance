import Image from "next/image";
import React from "react";

const CustomInvertor = ({ image, title, description }) => {
  return (
    <div className="flex  items-center gap-2 border border-[#E6EEF5] rounded-xl px-3 py-2 mt-4">
      <Image src={image} alt="icon1" />
      <div>
        <h1 className="text-[18px] font-WorkSanser font-medium ">{title}</h1>
        <p className="text-[16px] font-WorkSanser font-normal">{description}</p>
      </div>
    </div>
  );
};

export default CustomInvertor;
