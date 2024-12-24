import React, { useEffect, useState } from 'react';
import TitleHelmet from '../components/TitleHelmet';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import PageHeading from '../components/PageHeading';


const BorrowedBooksPage = () => {
   
    const [borrowBooks , setBorrowBook]=useState([])
    const {user}= useAuth()
  
    console.log(borrowBooks)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/borrow-book?email=${user.email}`)
        .then(res=>setBorrowBook(res.data))
    },[user.email])


    const handleReturn=(id)=>{
        try{

            axios.patch(`${import.meta.env.VITE_Project_Api_Url}/return-book/${id}`)
            .then(res=>console.log(res.data))
            const returnBook= borrowBooks.filter(book => book._id !== id)

            setBorrowBook(returnBook);
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className=' container mx-auto px-4'>
            <TitleHelmet title={'Borrow Book'}></TitleHelmet>
            <PageHeading title={'My Borrowed Books'} subtitle={"View and manage the books you've borrowed from the library"}></PageHeading>
           <div className='grid my-10 grid-cols-2 md:grid-cols-3  gap-2 md:gap-8'>
           {
                borrowBooks.map(book=> <div className="card md:h-[280px] rounded-none md:rounded-lg flex flex-col md:flex-row card-side bg-gray-300 shadow-xl">
                    <figure className=''>
                        <img
                            src={book.photo}
                            alt={book.name}
                            className=" h-full" />
                    </figure>
                    <div className="card-body space-y-0">
                        <h2 className="text-xs lg:text-lg font-bold"> Book Name: {book.name}</h2>
                        <p className='text-xs lg:text-lg'><strong>Category:</strong> {book.category}</p>
                        <p className='text-xs lg:text-lg'><strong> Borrowed date:</strong> {new Date(book.borrowedAt).toLocaleDateString()}</p>
                        <p className='text-xs lg:text-lg'><strong>Return Date:</strong> { new Date(book.returnDate).toLocaleDateString()}</p>
                        
                        <div className="card-actions">
                            <button
                                className="btn btn-sm bg-[#e63746] border-none text-white hover:bg-white hover:text-black hover:border-[#e63746]"
                                onClick={()=>handleReturn(book._id)}    
                            >
                               Return
                            </button>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default BorrowedBooksPage;