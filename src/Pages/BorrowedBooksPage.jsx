import React, { useEffect, useState } from 'react';
import TitleHelmet from '../components/TitleHelmet';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import PageHeading from '../components/PageHeading';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';


const BorrowedBooksPage = () => {

    const [borrowBooks, setBorrowBook] = useState([])
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    // console.log(borrowBooks)
    useEffect(() => {
        axiosSecure.get(`/borrow-book?email=${user.email}`, { withCredentials: true })
            .then(res => setBorrowBook(res.data))
    }, [user.email])


    const handleReturn = (id) => {
        try {

            axios.patch(`${import.meta.env.VITE_Project_Api_Url}/return-book/${id}`,)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.deletedCount) {
                        toast.success('Book return from borrow list');
                    }
                })
            const returnBook = borrowBooks.filter(book => book._id !== id)

            setBorrowBook(returnBook);

        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <div className=' container mx-auto px-4'>
            <TitleHelmet title={'Borrow Book'}></TitleHelmet>
            <PageHeading title={'My Borrowed Books'} subtitle={"View and manage the books you've borrowed from the library"}></PageHeading>
            <div className="overflow-x-auto my-10">
                    <table className="min-w-full max-w-lg divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrowed date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {borrowBooks.map((book) => (
                                <tr key={book._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-16 h-16 object-cover" src={book.photo} alt={book.name} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{book.name}</div>
                                    </td>
                                    <td className="px-6  py-4 whitespace-nowrap">
                                        <div className="text-sm flex text-center  text-gray-500">{book.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{new Date(book.borrowedAt).toLocaleDateString()}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className='flex  items-center'> {new Date(book.returnDate).toLocaleDateString()}</div>
                                    </td>
                                   
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            className="btn btn-sm bg-[#e63746] border-none text-white hover:bg-white hover:text-black hover:border-[#e63746]"
                                            onClick={() => handleReturn(book._id)}
                                        >
                                            Return
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            {/* <div className='grid my-10 grid-cols-2 md:grid-cols-3  gap-2 md:gap-8'>

               
                {
                borrowBooks.map(book=> <div key={book._id} className="card md:h-[280px] rounded-none md:rounded-lg flex flex-col md:flex-row card-side bg-gray-300 shadow-xl" data-aos="zoom-in" data-aos-duration="3000">
                    <figure className=''>
                        <img
                            src={book.photo}
                            alt={book.name}
                            className=" h-full" />
                    </figure>
                    <div className="card-body w-5/6 space-y-0">
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
            </div> */}
        </div>
    );
};

export default BorrowedBooksPage;