"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 
import { HiHome } from "react-icons/hi2";
import { TfiInfoAlt } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { IoIosNavigate } from "react-icons/io";


const Nav = () => {
  const [activeIcon, setActiveIcon] = useState(null);

 
  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const iconStyle = (iconName) =>
    `cursor-pointer my-4 text-2xl transition-colors duration-300 ${
      activeIcon === iconName ? 'text-blue-500 fill-blue-300 stroke-blue-600' : 'text-gray-600'
    }`;

  return (
    <>

    
    <div className=' min-h-screen w-[14.5rem] pr-[2.4rem] flex-row md:flex-row lg:border-r-[1.5px] border-gray-300 flex lg:flex-col justify-center items-end'>
        <Link href="/" passHref>
          <HiHome
            className={iconStyle('home')} 
            onClick={() => handleClick('home')}
          />
        </Link>
        
        <Link href="/info" passHref>
          <TfiInfoAlt 
            className={iconStyle('info')} 
            onClick={() => handleClick('info')}
          />
        </Link>
        
        <IoBookOutline 
          className={iconStyle('blog')} 
          onClick={() => handleClick('blog')}
        />
        <MdOutlineWorkHistory 
          className={iconStyle('projects')} 
          onClick={() => handleClick('projects')}
        />
        <RiFilePaper2Line 
          className={iconStyle('resume')} 
          onClick={() => handleClick('resume')}
        />
        <IoIosNavigate 
        className={iconStyle('connect')} 
        onClick={() => handleClick('connect')}
        />
      </div>
    </>
  );
};

export default Nav;
