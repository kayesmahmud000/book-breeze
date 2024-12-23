import React from 'react';
import Rating from './Rating';

const BookTable = ({allBooks}) => {
    console.log(allBooks)
    return (
        <div className='my-10'>
           <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book._id}>
              <td className="border w-24 h-28  px-4 py-2">
                <img className='w-full h-full' src={book.photo} alt={book.name} />
              </td>
              <td className="border px-4 py-2">{book.name}</td>
              <td className="border px-4 py-2">{book.category}</td>
              <td className="border px-4 py-2">{book.authorName}</td>
              <td className="border  px-4 py-2">
               <div className='flex items-center'> <Rating  /> <span className=' mt-1'>{book.rating}</span></div>
              </td>
              <td className="border px-4 py-2">{book.quantity}</td>
              <td className="border px-4 py-2">
                <button className='btn btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black'>Update</button>
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