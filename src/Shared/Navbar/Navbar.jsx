import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

    const menu = <>
        <li className='cursor-pointer'> Home </li>
        <li className='cursor-pointer'> All Toys</li>
        <li className='cursor-pointer'> My Toys</li>
        <li className='cursor-pointer'> Add A Toy</li>
        <li className='cursor-pointer'> Blogs</li>
    </>

    return (
        <div className='bg-orange-300'>
            <div className="navbar md:w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100  w-52 gap-5 left-[-8px]">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="LOGO" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 px-1 font-bold uppercase">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end pe-5 md:pe-0">
                    <FaUserCircle className='w-6 h-6 ' />
                    {/* <img src={} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;