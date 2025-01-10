import React, { useEffect, useState } from 'react';
import PageHeading from './PageHeading';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { Fade } from 'react-awesome-reveal';

const LeatestBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/latest-book`)
            .then(res => setBooks(res.data))
    }, [])
    return (
        <div className=''>
           <Fade direction='down'>
           <div className='flex justify-center items-start mt-16 -mb-5'>
                <p className='text-center font-bold text-gray-500 flex gap-1 items-center'><FaArrowRight />Latest </p>
            </div>
           </Fade>
            <PageHeading title={'Latest Books'} subtitle={'Discover the Newest Additions to Our Collection'}></PageHeading>
            <div className='grid grid-cols-2 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
    {
        books.map(book => (
            <div key={book._id} className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl h-full flex flex-col justify-between" data-aos="zoom-in" data-aos-duration="3000">
                <figure className='h-96 w-full overflow-hidden'>
                    <img className='rounded-t-lg object-cover w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50 '
                        src={book.photo}
                        alt={book.name} />
                </figure>
                <div className="my-2 flex flex-col flex-wrap px-4 flex-grow">
                    <h2 className=" md:text-xl font-bold">
                        {book.name}
                        <div className="badge badge-outline font-normal ml-2">{book.category}</div>
                    </h2>
                    <p className='md:font-bold'>By- {book.authorName}</p>
                    <div className="">
                        <div className="review-rating text-yellow-500">
                            {"★".repeat(book.rating) + "☆".repeat(5 - book.rating)}
                        </div>
                        <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {book.quantity}</div>
                    </div>
                </div>
                <div className='flex mt-auto justify-end p-4'>
                    <Link to={`/detailsPage/${book._id}`}> 
                        <button className='btn btn-sm bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'>Details</button>
                    </Link>
                </div>
            </div>
        ))
    }
</div>


            
            {/* <div className='grid grid-cols-2 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
                {
                    books.map(book => <div key={book._id} className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl "  data-aos="zoom-in" data-aos-duration="3000">
                        <figure>
                            <img className='rounded-t-lg transform w-full h-[] group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50 '
                                src={book.photo}
                                alt={book.name} />
                        </figure>
                        <div className="my-5 flex flex-col flex-wrap px-4">
                            <h2 className=" md:ext-xl font-bold">
                                {book.name}
                                <div className="badge badge-outline font-normal ml-2">{book.category}</div>
                            </h2>
                            <p className='md:font-bold'>By- {book.authorName}</p>
                            <div className="">
                                <div className="review-rating text-yellow-500">
                                    {"★".repeat(book.rating) + "☆".repeat(5 - book.rating)}
                                </div>
                               
                                <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {book.quantity}</div>
                            </div>
                            <div className='flex mt-1 justify-end'>
                                <Link to={`/detailsPage/${book._id}`}> <button className='btn btn-sm bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'>Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div> */}
             {/* <div className=" flex items-center font-semibold"><span className='mr-1'>Rating:</span> <Rating ></Rating> <span className='ml-1 mt-1'>{book.rating}</span> </div> */}
        </div>
    );
};

export default LeatestBooks;