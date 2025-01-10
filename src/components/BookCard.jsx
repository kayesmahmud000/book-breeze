import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    const {photo,name,category,authorName,rating, quantity } = book
    
    const handleUpdateBook= ()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/books/${book._id}`)
        
    }
    return (
        <div>
            <div className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl h-full flex flex-col justify-between" data-aos="zoom-in" data-aos-duration="3000">
                <figure className='h-96 w-full overflow-hidden'>
                    <img className='rounded-t-lg object-cover w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50 '
                        src={photo}
                        alt={name} />
                </figure>
                <div className="my-5 flex flex-col flex-wrap px-4 flex-grow">
                    <h2 className=" md:text-xl font-bold">
                       {name}
                       <div className="badge badge-outline font-normal ml-2">{category}</div> 
                    </h2>
                    <p className='md:font-bold'>By- {authorName}</p>
                    <div className="">
                    <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {quantity}</div>
                    <div className="review-rating  text-yellow-500"><span className='font-semibold text-black mr-1'>Rating:</span>
              {"★".repeat(rating) + "☆".repeat(5 - rating)}
            </div>
                        {/* <div className=" flex items-center font-semibold"><span className='mr-1'>Rating:</span> <Rating ></Rating> <span className='ml-1 mt-1'>{rating}</span> </div> */}
                       
                    </div>
                    <div className='flex mt-auto justify-end p-4'>
                       <Link to={`/updatePage/${book._id}`}> <button onClick={handleUpdateBook} className='btn btn-sm bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'>Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;