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
           <header className='w-11/12  sticky top-0 z-50 bg-white opacity-80   shadow-sm  mx-auto  py-5 mb-10 '>
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