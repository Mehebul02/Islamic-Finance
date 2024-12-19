import { logo } from "@/assets/images";
import Container from "@/shared/Container";
import CustomButton from "@/shared/CustomButton";
import CustomButton2 from "@/shared/CustomButton2";
import Image from "next/image";
import React from "react";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className="footer pt-10  p-10">
          <aside>
            <Image src={logo} alt="logo" />
            <p className="w-80 text-[15px] font-WorkSanser font-normal  mt-2 mb-2">
              Disclaimer: Due to the periodic changes of information/
              requirement/ document, RSIN doesn’t provide any confirmation,
              guarantee or representation, express or implied, that the
              information contained or referenced herein is completely accurate
              or final. click here
            </p>
          </aside>
          <nav>
            <h6 className="text-xl font-WorkSanser text-black">Services</h6>
            <a className="link link-hover">For Investors</a>
            <a className="link link-hover">For Business</a>
          </nav>
          <nav>
            <h6 className="text-xl font-WorkSanser text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">How it Works</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">FAQ</a>
          </nav>
          <nav>
            <h6 className="text-xl font-WorkSanser text-black">Information</h6>
            <a className="link link-hover">Legal</a>
            <a className="link link-hover">Learn more as an Investor</a>
            <a className="link link-hover">Learn More as a Borrower</a>
            <a className="link link-hover">Key Principles & Rules</a>
            <a className="link link-hover">Complains and suggestions</a>
          </nav>
          <nav>
            <h6 className="text-xl font-WorkSanser text-black">Action</h6>
            <div className="space-y-7 mt-6">
              <CustomButton text="Start Investing" />
              <CustomButton2 text="Get Funded" />
            </div>
          </nav>
        </footer>
{/* contact information  */}
        <ContactInfo />
      </Container>
      <div className="bg-[#EFF1F5] p-3">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between ">
            <h1 className="text-[16px] font-WorkSanser">Copyright RSIN@2024 . All rights reserved. V-0.1.14</h1>
        <div className="space-x-5 font-WorkSanser">
        <a>Terms and Conditions</a>
        <a>Privacy policy</a>
        <a>Cookie Settings</a>
        </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
