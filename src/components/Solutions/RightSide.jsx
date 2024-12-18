import React from "react";
import CustomDivider from "./CustomDivider";
import CustomButton from "@/shared/CustomButton";

const RightSide = () => {
  return (
    <div>
      <h3 className="text-xl text-secondaryColor font-WorkSanser font-medium">
        Solutions
      </h3>
      <h1 className="text-[42px] font-WorkSanser font-medium">
        Our Finance Solutions
      </h1>
      <div className="divider"></div>
      <h2 className="text-xl text-primaryColor font-WorkSanser font-medium">
        Business Expansion
      </h2>
      <p className="font-WorkSanser mt-2 font-normal">
        Scale your business by adding new products, service or open new branch
      </p>
      <div className="divider"></div>
      <div>
        <CustomDivider text="Upgrade Your Premises" />
        <CustomDivider text="Marketing" />
        <CustomDivider text="Purchase Equipment" />
        <CustomDivider text="Increase Inventory" />
        <CustomDivider text="Invoice Finance" />
      </div>
     <div className="flex items-center gap-6">
     <CustomButton text='Get Started'/>
      <button className="text-black rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3 border border-primaryColor">
      Learn more
          </button>
     </div>
    </div>
  );
};

export default RightSide;
