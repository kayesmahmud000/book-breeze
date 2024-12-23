import { FaArrowRight } from 'react-icons/fa';
import BannerImg from '../assets/banner1.png'

const Banner1 = () => {
    return (
        <div>
            <div className="hero bg-[#4DA1A9] h-[480px] lg:h-[600px]">
                <div className="hero-content flex-col text-black lg:flex-row  ">

                    <div>
                        <h1 className=" text-2xl text-gray-100 lg:text-6xl  w-5/6 font-bold">Discover New Worlds with Book Breeze
                        </h1>
                        <p className="py-6  text-xs lg:text-lg text-gray-200">
                            From timeless classics to modern bestsellers, our library offers a world of books waiting to be discovered. Find your next favorite read and embark on new adventures today
                        </p>
                        <button className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Explore <FaArrowRight /></button>
                    </div>
                    <img
                        src={BannerImg}
                        className="   rounded-lg w-md h-[150px] lg:h-[400px] md:max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner1;