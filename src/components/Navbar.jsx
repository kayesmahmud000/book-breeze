import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/icon.png"
import AuthContext from '../context/AuthContext';
import { Typewriter } from 'react-simple-typewriter';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isHovered, setIsHovered] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }
    const link = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/"}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/allBook"}>All Books</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/addBook"}>Add Book</NavLink></li>
        {
            user?.email && <li><NavLink className={({ isActive }) => isActive ? "text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/borrowedBooks"}>Borrowed Books</NavLink></li>
        }

    </>
    return (
        <div>
            <div className="navbar text-black ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                            <IoMdMenu size={28} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10]  p-2 w-32 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={logo} className='w-7 hidden md:flex' alt="" />
                        <h1 className="font-bold md:text-3xl">
                            <Typewriter
                                words={[" BOOK BREEZE"]}
                                loop={2}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />

                        </h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3 px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                <label className="swap md:mr-5 swap-rotate">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} className="theme-controller" />

                {/* sun icon */}
                <svg
                    className="swap-off h-7 w-7 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                    className="swap-on h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>

                    {
                        user?.email ? <div
                            className="user-photo relative "
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src={user?.photoURL} className='w-14 h-14 object-cover rounded-full' alt="User" />
                            {isHovered && <div className=' flex justify-center  absolute z-10    gap-3 rounded-xl shadow-md bg-gray-300 top-0 right-0 -left-5  w-fit p-2  flex-col'>
                                <span className="display-name lg:text-2xl text-start font-bold">{user?.displayName}</span>
                                <button onClick={handleLogout} className=' btn btn-sm text-sm  mr-2 md:mr-4 bg-[#e63746] text-white hover:bg-white hover:text-black'>Logout</button></div>
                            }
                        </div> : <div>
                            <Link to={"/login"} ><button className='btn btn-xs md:btn-md md:font-bold mr-3 text-white bg-[#3385ff]'>Login</button></Link>
                            <Link to={'/register'} ><button className='btn btn-xs md:btn-md border-[#3385ff] font-bold'>Register</button></Link>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;