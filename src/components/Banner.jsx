import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[480px]  lg:h-[600px] "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/KG9HYv5/banner.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-3xl md:text-6xl font-bold">Your Reading Journey Begins Here..</h1>
                        <p className="mb-5  text-xs lg:text-lg">
                        <span className='font-bold text-lg'>Book Breeze</span> is more than a library; it's a gateway to endless possibilities. Start your reading journey with us and become part of a community that celebrates the love of books.
                        </p>
                        <button className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Explore <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;