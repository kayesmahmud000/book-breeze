

import { Link, useLoaderData } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import Rating from '../components/Rating';

const CategoryBookPage = () => {
    const categoryBooks = useLoaderData()

    return (
        <div className='container mx-auto my-10'>
            <div className="my-10">
                <Link to={"/"}><button className="btn btn-xs md:btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black"><FaArrowLeft />Go Back</button></Link>
            </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
           {
                categoryBooks.map(book => <div key={book._id} className="card  h-[550px] rounded-none hover:shadow-2xl border-gray-400 border">
                    <figure>
                        <img className='w-full h-[380px] '
                            src={book.photo}
                            alt={book.name} />
                    </figure>
                    <div className="my-5 flex flex-col flex-wrap px-4">
                        <h2 className=" text-xl font-bold">
                            {book.name}
                            <div className="badge badge-outline font-normal ml-2">{book.category}</div>
                        </h2>
                        <p className='font-bold'>By- {book.authorName}</p>
                        <div className="flex items-center justify-between">
                            <div className=" flex items-center font-semibold"><span className='mr-1'>Rating:</span> <Rating ></Rating> <span className='ml-1 mt-1'>{book.rating}</span> </div>
                            <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {book.quantity}</div>
                        </div>
                        <div className='flex justify-end'>
                            <Link to={`/detailsPage`}> <button onClick={''} className='btn btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black'>Details</button></Link>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default CategoryBookPage;