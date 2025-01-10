

import { Link, useLoaderData } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import Rating from '../components/Rating';
import TitleHelmet from '../components/TitleHelmet';

const CategoryBookPage = () => {
    const categoryBooks = useLoaderData()

    return (
        <div className='container mx-auto my-10'>
           
            <div className="my-10">
                <Link to={"/"}><button className="btn btn-xs md:btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black"><FaArrowLeft />Go Back</button></Link>
            </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
           {
                categoryBooks.map(book => <div key={book._id} className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl h-full flex flex-col justify-between" data-aos="zoom-in" data-aos-duration="3000">
                    <figure className='h-96 w-full overflow-hidden'>
                        <img className='rounded-t-lg object-cover w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50  '
                            src={book.photo}
                            alt={book.name} />
                    </figure>
                    <div className="my-2 flex flex-col flex-wrap px-4 flex-grow">
                        <h2 className=" text-xl font-bold">
                            {book.name}
                            <div className="badge badge-outline font-normal ml-2">{book.category}</div>
                        </h2>
                        <p className='font-bold'>By- {book.authorName}</p>
                        <div className="">
                        <div className="review-rating text-yellow-500">
                            {"★".repeat(book.rating) + "☆".repeat(5 - book.rating)}
                        </div>
                            <div className=" font-semibold"><span className='font-semibold'>Quantity:</span> {book.quantity}</div>
                        </div>
                        <div className='flex mt-auto justify-end p-4'>
                            <Link to={`/detailsPage/${book._id}`}> <button  className='btn btn-sm bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black'>Details</button></Link>
                        </div>
                    </div>
                    <TitleHelmet title={book.category}></TitleHelmet>
                </div>)
                
            }
           </div>
        </div>
    );
};

export default CategoryBookPage;