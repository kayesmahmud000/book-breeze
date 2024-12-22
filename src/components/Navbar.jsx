import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/icon.png"
import AuthContext from '../context/AuthContext';
const Navbar = () => {
    const {user, logOut}= useContext(AuthContext)
    const [isHovered, setIsHovered] = useState(false)
    const handleLogout=()=>{
        logOut()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err)
        })
    }
    const link =<>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"}to={"/"}>Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"}  to={"/allBook"}>All Books</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"} to={"/addBook"}>Add Book</NavLink></li>
    {
        user?.email && <li><NavLink className={({isActive})=>isActive?"text-[#3385ff] underline mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"} to={"/borrowedBooks"}>Borrowed Books</NavLink></li>
    }
    
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
                {
                    user?.email ?<div
                    className="user-photo relative "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src={user?.photoURL} className='w-14 h-14 object-cover rounded-full' alt="User" />
                    {isHovered && <div className=' flex justify-center  absolute z-10    gap-3 rounded-xl shadow-md bg-[#e1c6b7] top-0 right-0 -left-5  w-fit p-2  flex-col'>
                        <span className="display-name lg:text-2xl text-start font-bold">{user?.displayName}</span>
                        <button onClick={handleLogout} className=' btn  mr-2 md:mr-4 bg-[#e63746] text-white hover:bg-white hover:text-black'>Sign Out</button></div>
                    }
                </div>  : <div>
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