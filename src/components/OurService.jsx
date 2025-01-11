import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading'

import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const OurService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/service`)
            .then(res => setServices(res.data))
    }, [])
    return (
        <div className='  p-2'>
            <div className='flex justify-center items-start -mb-5'>
                       <p className='text-center font-bold text-gray-500 flex gap-1 items-center'><FaArrowRight /> Service</p>
                       </div>
        <div>
            <PageHeading title={'Services'} subtitle={'Outstanding Immigration Book Services'}></PageHeading>
        </div>
        <section className=' grid my-10  text-black lg:gap-5 grid-cols-1 lg:grid-cols-4'>
           {
            services.map(service=> <div key={service._id} className="card  " data-aos="fade-right" data-aos-delay="50"
                data-aos-duration="1000">
                                <figure>
                                    <img
                                        src={service.photo}
                                        alt={service.service}
                                        className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100' />
                                </figure>
                                <div className="card-body p-3 bg-white  border border-gray-300 ">
                                    <h2 className="card-title lg:text-2xl ">{service.service}</h2>
                                    <p className='lg:w-5/6'>{service.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/serviceDetails/${service._id}`}>
                                        <button className='btn btn-sm bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'>Read More <BsArrowRight></BsArrowRight> </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>)
           }
            {/* <div className="card  " data-aos="fade-down " data-aos-delay="50"
data-aos-duration="1000">
                <figure>
                    <img
                        src={service2}
                        alt="bassness" 
                        className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100'/>
                </figure>
                <div className="card-body p-3 bg-white  border border-gray-300 ">
                    <h2 className="card-title  lg:text-3xl">Business Visa</h2>
                    <p className='lg:w-5/6'>The required documents vary by visa is type but generally include a valid times passport, application photos</p>
                    <div className="card-actions justify-end">
                    <Link to={"/allVisas"}>
                        <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card  " data-aos="fade-left" data-aos-delay="50"
data-aos-duration="2000">
                <figure>
                    <img
                        src={service3}
                        alt="family" 
                        className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100'/>
                </figure>
                <div className="card-body p-3 bg-white  border border-gray-300">
                    <h2 className="card-title  lg:text-3xl">Family Visa</h2>
                    <p className='lg:w-5/6'>If your application is denied, you will be given a reason. You may be able to kinds reapply or appeal</p>
                    <div className="card-actions justify-end">
                    <Link to={"/allVisas"}>
                        <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card  " data-aos="fade-left" data-aos-delay="50"
data-aos-duration="2000">
                <figure>
                    <img
                        src={service4}
                        alt="family" 
                        className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100'/>
                </figure>
                <div className="card-body p-3 bg-white  border border-gray-300">
                    <h2 className="card-title  lg:text-3xl">Family Visa</h2>
                    <p className='lg:w-5/6'>If your application is denied, you will be given a reason. You may be able to kinds reapply or appeal</p>
                    <div className="card-actions justify-end">
                    <Link to={"/allVisas"}>
                        <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </section>
    </div>
    );
};

export default OurService;