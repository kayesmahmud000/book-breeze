import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageHeading from './PageHeading';
import { FaArrowRight } from 'react-icons/fa';
import CategoryCard from './CategoryCard';
import { Fade } from 'react-awesome-reveal';

const Category = () => {
    const [categories, setCategories]=useState([])
    // console.log(categories)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/category`)
        .then(res=>setCategories(res.data))
    },[])
    return (
        <div>
          <Fade direction='down'>
          <div className='flex justify-center items-start mt-16 -mb-5'>
           <p className='text-center font-bold text-gray-500 flex gap-1 items-center'><FaArrowRight /> Categories</p>
           </div>
          </Fade>
           <PageHeading title={'Categories of Books'} subtitle={'Dive into a wide range of genres and find your next favorite read.'}></PageHeading> 

           <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
            {
                categories.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)
            }
           </div>
        </div>
    );
};

export default Category;