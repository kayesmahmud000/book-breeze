import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const MainLayout = () => {
    return (
        <div>
           <header className='  sticky top-0 z-50 bg-[#4DA1A9] bg-opacity-50   shadow-sm    py-5 mb-5 '>
            <Navbar></Navbar>
           </header>
           <main className=' min-h-[780px]'>
            <Outlet/>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;