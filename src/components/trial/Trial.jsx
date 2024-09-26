"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaBriefcase, FaTv, FaCompass } from 'react-icons/fa';

const Home = () => <div className="content">Home Page</div>;
const About = () => <div className="content">About Page</div>;
const Services = () => <div className="content">Services Page</div>;
const Projects = () => <div className="content">Projects Page</div>;
const Contact = () => <div className="content">Contact Page</div>;
const Explore = () => <div className="content">Explore Page</div>;

const Trial = () => {
    return (
        <Router>
            <div className="flex">
                {/* Fixed Navbar */}
                <div className="fixed h-screen w-16 flex flex-col items-center bg-gray-100 py-4">
                    <NavIcon to="/" icon={<FaHome size="24" />} />
                    <NavIcon to="/about" icon={<FaInfoCircle size="24" />} />
                    <NavIcon to="/services" icon={<FaBook size="24" />} />
                    <NavIcon to="/projects" icon={<FaBriefcase size="24" />} />
                    <NavIcon to="/contact" icon={<FaTv size="24" />} />
                    <NavIcon to="/explore" icon={<FaCompass size="24" />} />
                </div>

                {/* Main Content Area */}
                <div className="ml-16 flex-grow p-4">
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
    );
};

const NavIcon = ({ to, icon }) => (
    <Link to={to} className="my-2 p-2 text-gray-600 hover:text-blue-500">
        {icon}
    </Link>
);

export default Trial;
