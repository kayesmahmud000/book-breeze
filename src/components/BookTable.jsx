import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookTable = ({allBooks}) => {
    console.log(allBooks)
    const handleUpdateBook= id=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/books/${id}`)
        
    }
    return (
        <div className='my-10'>
        
    <div className="overflow-x-auto">
      <table className="min-w-full max-w-lg divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allBooks.map((book) => (
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
                <div className="text-sm text-gray-900">{book.authorName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <div className='flex  items-center'> <Rating  /> <span className=' mt-1'>{book.rating}</span></div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.quantity}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link to={`/updatePage/${book._id}`}> <button onClick={()=>handleUpdateBook(book._id)} className='btn btn-xs md:btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black'>Update</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default BookTable;