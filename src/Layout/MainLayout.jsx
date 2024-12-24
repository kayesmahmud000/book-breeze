import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <header className='w-11/12 mx-auto my-5'>
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