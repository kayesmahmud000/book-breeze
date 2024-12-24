import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const handleCategory=()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/category/${category.name}`)
    }
    return (
        <div>
            <div className="card border hover:border-gray-500 hover:bg-gray-100 hover:shadow-2xl"  data-aos="zoom-out" data-aos-duration="1500">
                <div className="card-body items-center text-center">
                    <img src={category.img} className='w-10 object-cover lg:w-16' alt="" />
                    <div className="divider"></div>
                    <div className="card-actions justify-end">
                   
                        <Link to={`/categoryBookPage/${category.name}`}>
                        <button onClick={handleCategory} className=" px-4 py-2 bg-gray-300 border-none text-gray-700 hover:bg-[#4DA1A9] hover:text-white md:text-2xl font-bold">{category.name}</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;