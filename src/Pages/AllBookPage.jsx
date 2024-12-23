import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageHeading from '../components/PageHeading';
import BookCard from '../components/BookCard';
import BookTable from '../components/BookTable';


const AllBookPage = () => {
    const [allBooks, setAllBooks]=useState([])
    const [viewType, setViewType] = useState('card');
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/all-books`)
        .then(res=>setAllBooks(res.data))
    },[])

    const handleViewChange = (event) => {
        setViewType(event.target.value);
      };
    return (
        <div className='container mx-auto px-4'>
          <div>
          <PageHeading title={'Explore Our Entire Collection'} subtitle={'Browse through all the books in our library, discover new favorites, and update book details.'}></PageHeading>
          </div>
          <div className="flex justify-end mb-4">
        <select
          className="form-select"
          value={viewType}
          onChange={handleViewChange}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewType === 'card' ? (
       <section className=' my-16 '>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
           {allBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)}
       </div>
     </section>
      ) :(
        <BookTable allBooks={allBooks}></BookTable>
      )}
          
        </div>
    );
};

export default AllBookPage;