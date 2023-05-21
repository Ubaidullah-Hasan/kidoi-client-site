import React, { useContext, useState } from 'react';
import logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    

    const handleLog = () => {
        navigate("/login");
    }
    const signOut = () => {
        logOut()
            .then(() => {
                console.log("SIGN OUT!!")
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const [isHovered, setIsHovered] = useState(false);

    const menu = <>
        <li className='cursor-pointer'><Link to="/">Home</Link></li>
        <li className='cursor-pointer'><Link to="/alltoys">All Toys</Link></li>
        {
            user?.email && <>
                <li className='cursor-pointer'><Link to='/mytoys'>My Toys</Link></li>
                <li className='cursor-pointer'><Link to='/addToy'> Add A Toy</Link></li>
            </>
        }
        <li className='cursor-pointer'><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className='bg-red-400'>
            <div className="navbar md:w-[90%] mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100  w-52 md:gap-5 left-[-8px]">
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
                <div className="navbar-end pe-5 md:pe-0 relative">
                    {
                        user?.photoURL ?
                            <>
                                <img src={user?.photoURL} alt="User Image" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='w-6 h-6 rounded-full cursor-pointer' />
                                <button onClick={signOut}  className='btn btn-sm rounded-full font-normal ms-3'>Log Out</button>
                                {
                                    user.displayName && <button className={` absolute bottom-[-40px] left-[5px] md:left-[200px] btn btn-xs  rounded-full font-extralight px-5 ${isHovered ? 'block' : 'hidden'}`}>{user.displayName}</button>
                                }
                            </>
                            :
                            <>
                                <FaUserCircle className='w-6 h-6 ' />
                                <button onClick={handleLog} className='btn btn-sm rounded-full font-normal ms-3'>Log in</button>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;