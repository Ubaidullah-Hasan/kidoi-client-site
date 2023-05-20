import React from 'react';
import logo from "../../assets/footerlogo.png";
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 ">
                <div className="container mx-auto px-4 w-[90%]">
                    <div className="md:flex gap-10 py-12 ">
                        <div className=" md:w-[50%] mb-4 ">
                            <img src={logo} alt="Logo" className="h-10" />
                            <p className="text-white text-lg font-extrabold mt-4">KIDOL</p>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit esse soluta consequuntur porro debitis sunt explicabo! Repudiandae magni quasi, at assumenda culpa ex nam, quos neque, et delectus deserunt!</p>
                        </div>
                        <div className="md:w-[25%] ">
                            <nav>
                                <h3 className='text-white text-xl font-extrabold uppercase'>Pages </h3>
                                <ul className="space-y-3 mt-4">
                                    <li>
                                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex space-x-4 md:w-[25%] items-center mt-5 md:mt-0">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                <FaFacebook />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                <FaYoutube />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className=" ">
                        <div className='md:flex justify-center gap-12 border-t py-6'>
                            <p className="text-white">© {new Date().getFullYear()} Kidol. All rights reserved.</p>
                            <p className='text-white hidden md:blok'>||</p>
                            <p className="text-white">123 Street, City, State, ZIP Code</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;