import { logo } from "@/assets/images";
import { navigation } from "@/constant";

import Container from "@/shared/Container";
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1140px] mx-auto bg-[#ffff] pt-6">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navigation?.map((item) => (
                <Link className="mb-4" href={item?.href} key={item?.title}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image className="w-[100px] md:w-[150px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="text-[20px] md:text-[18px]  flex items-center gap-5 font-WorkSanser font-[400px]">
              {navigation?.map((item) => (
                <Link
                  className="hover:text-primaryColor "
                  href={item?.href}
                  key={item?.title}
                >
                  {item.title}
                </Link>
              ))}

              {/* {navigation.map((item, index) => (
        <li key={index}>
          {item.submenu ? (
            <details>
              <summary>{item.title}</summary>
              <ul className="">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.href}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <a href={item.href}>{item.title}</a>
          )}
        </li>
      ))} */}
            </div>
          </ul>
        </div>
        <div className="navbar-end gap-6 md:gap-10">
        
         <Link href='/login'>
      
           <button  className=" text-primaryColor  rounded-full text-[17px] font-WorkSanser font-medium">
            Log In
          </button>
        </Link>
        
          <CustomButton text='Apply Now'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
