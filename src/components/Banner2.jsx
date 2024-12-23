import { FaArrowRight } from 'react-icons/fa';
import bannerImg2 from '../assets/bnner2.png'

const Banner2 = () => {
    return (
        <div>
            <div className="hero bg-[#4DA1A9] h-[480px] lg:h-[600px] px-5">
                <div className="hero-content text-white flex-col-reverse lg:flex-row-reverse">
                    <img
                        src={bannerImg2}
                        className="lg:max-w-lg lg:h-[400px] rounded-lg " />
                    <div className=''>
                        <h1 className="text-2xl text-start lg:text-5xl font-bold">From Classics to Modern Hits, We've Got It All</h1>
                        <p className="py-6 text-xs lg:text-lg">
                        Our diverse collection spans genres, eras, and interests, ensuring you'll find exactly what you're looking for. <span className='font-bold text-lg'>Book Breeze.</span>
                        </p>
                        <button className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Explore <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;