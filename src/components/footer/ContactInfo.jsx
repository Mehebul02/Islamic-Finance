import { appStor, facebook, instagram, linkedin, twitter } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-10 ">
      {/* 1st section */}
      <div className="font-WorkSanser">
        <h1 className="text-md text-[#111322] font-WorkSanser">Contact Us</h1>
        <p>
          Email: <span className="text-[#005397]">contactus@rsin.com</span>
        </p>
        <p>
          Phone: <span className="text-[#005397]">8001000265</span>
        </p>
        <div className="flex  mt-3 gap-4">
         <Link href="#"> <Image src={facebook} alt="facebook" /></Link>
        <Link href='#'> <Image src={instagram} alt="instagram" /> </Link>  
        <Link href="#">  <Image src={linkedin} alt="linkedin" /> </Link> 
         <Link href="#">  <Image src={twitter} alt="twitter" /></Link>
        </div>
      </div>
      {/* 2nd section  */}
      <div>
      <h1 className="text-md text-[#111322] font-WorkSanser">Office Address</h1>
      <p className="text-md font-WorkSanser font-light w-80">Address: 1st Floor, Homestead Gulshan Link Tower, DCC TA-99, Gulshan-Badda link Road, Gulshan-1, Dhaka-1212</p>
     
     <p className=" text-primaryColor flex items-center gap-2 font-WorkSanser mt-2">
        <FaLocationDot className="text-primaryColor"/>
        View Location
     </p>
      </div>
      {/* 3rd section */}
      <div>
        <Image src={appStor} alt="appStor"/>
      </div>
    </div>
  );
};

export default ContactInfo;
