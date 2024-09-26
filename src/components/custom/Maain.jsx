"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";
import { TfiInfoAlt } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { IoIosNavigate } from "react-icons/io";


const Home = () => <div className="content">Home Page</div>;
const About = () => <div className="content">About Page</div>;
const Services = () => <div className="content">Services Page</div>;
const Projects = () => <div className="content">Projects Page</div>;
const Contact = () => <div className="content">Contact Page</div>;
const Explore = () => <div className="content">Explore Page</div>;


const Maain = () => {
  return (
    <Router>
    <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="min-h-screen w-[14.5rem] pr-[2.4rem] flex-row md:flex-row lg:border-r-[1.5px] border-gray-300 flex lg:flex-col justify-center items-end">
            <NavIcon to="/" icon={<HiHome  size="24" />} />
            <NavIcon to="/about" icon={<TfiInfoAlt size="24" />} />
            <NavIcon to="/services" icon={<IoBookOutline  size="24" />} />
            <NavIcon to="/projects" icon={<MdOutlineWorkHistory size="24" />} />
            <NavIcon to="/contact" icon={<RiFilePaper2Line size="24" />} />
            <NavIcon to="/explore" icon={<IoIosNavigate size="24" />} />
        </div>
        <div className="mr-[14.6rem] flex-grow p-10">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/explore" element={<Explore />} />
            </Routes>
        </div>
    </div>
</Router>
  )
};
const NavIcon = ({ to, icon }) => (
    <Link to={to} className="my-2 p-2 text-gray-600 hover:text-blue-500">
        {icon}
    </Link>
);
export default Maain