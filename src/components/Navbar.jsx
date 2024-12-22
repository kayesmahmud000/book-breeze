import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/icon.png"
const Navbar = () => {
    const link =<>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"}to={"/"}>Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"}  to={"/allBook"}>All Books</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"} to={"/addBook"}>Add Book</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"} to={"/borrowedBooks"}>Borrowed Books</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <IoMdMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 w-32 shadow">
                                {link}
                        </ul>
                    </div>
                   <div className='flex gap-2 items-center'>
                    <img src={logo} className='w-7 hidden md:flex' alt="" />
                   <h1 className="font-bold md:text-3xl">BOOK BREEZE.</h1>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3 px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                
                   <Link ><button className='btn btn-xs md:btn-md md:font-bold mr-3 text-white bg-[#3385ff]'>Login</button></Link>
                   <Link ><button className='btn btn-xs md:btn-md border-[#3385ff] font-bold'>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;