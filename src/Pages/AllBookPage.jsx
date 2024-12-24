import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageHeading from '../components/PageHeading';
import BookCard from '../components/BookCard';
import BookTable from '../components/BookTable';
import TitleHelmet from '../components/TitleHelmet';


const AllBookPage = () => {
    const [allBooks, setAllBooks]=useState([])
    const [viewType, setViewType] = useState('card');
    const [showAvailable, setShowAvailable] = useState(false);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/all-books`)
        .then(res=>setAllBooks(res.data))
    },[])

    const handleViewChange = (event) => {
        setViewType(event.target.value);
      };

      const handleFilterClick = () => {
                setShowAvailable(prevState => !prevState);
            };
        
            const filteredBooks = showAvailable ? allBooks.filter(book => book.quantity > 0) : allBooks;
    return (
        <div className='container mx-auto px-4'>
           <TitleHelmet title={'All Book'}></TitleHelmet>
          <div>
          <PageHeading title={'Explore Our Entire Collection'} subtitle={'Browse through all the books in our library, discover new favorites, and update book details.'}></PageHeading>
          </div>
          <div className="flex my-10 justify-between mb-4">
             <select
                    className="form-select border border-gray-700"
                    value={viewType}
                    onChange={handleViewChange}
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
                <button
                    onClick={handleFilterClick}
                    className="btn bg-[#e63746] text-white hover:bg-[#c12939]"
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
            </div>

      {viewType === 'card' ? (
       <section className=' my-16 '>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
           {filteredBooks.map(book=><BookCard key={book._id} book={book}></BookCard>)}
       </div>
     </section>
      ) :(
        <BookTable allBooks={filteredBooks}></BookTable>
      )}
          
        </div>
    );
};

export default AllBookPage;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import PageHeading from '../components/PageHeading';
// import BookCard from '../components/BookCard';
// import BookTable from '../components/BookTable';
// import TitleHelmet from '../components/TitleHelmet';

// const AllBookPage = () => {
//     const [allBooks, setAllBooks] = useState([]);
//     const [viewType, setViewType] = useState('card');
//     const [showAvailable, setShowAvailable] = useState(false);

//     useEffect(() => {
//         axios.get(`${import.meta.env.VITE_Project_Api_Url}/all-books`)
//             .then(res => setAllBooks(res.data));
//     }, []);

//     const handleViewChange = (event) => {
//         setViewType(event.target.value);
//     };

//     const handleFilterClick = () => {
//         setShowAvailable(prevState => !prevState);
//     };

//     const filteredBooks = showAvailable ? allBooks.filter(book => book.quantity > 0) : allBooks;

//     return (
//         <div className='container mx-auto px-4'>
//             <TitleHelmet title={'All Book'}></TitleHelmet>
//             <div>
//                 <PageHeading title={'Explore Our Entire Collection'} subtitle={'Browse through all the books in our library, discover new favorites, and update book details.'}></PageHeading>
//             </div>
//             <div className="flex justify-between mb-4">
//                 <select
//                     className="form-select border border-gray-700"
//                     value={viewType}
//                     onChange={handleViewChange}
//                 >
//                     <option value="card">Card View</option>
//                     <option value="table">Table View</option>
//                 </select>
//                 <button
//                     onClick={handleFilterClick}
//                     className="btn bg-[#e63746] text-white hover:bg-[#c12939]"
//                 >
//                     {showAvailable ? 'Show All Books' : 'Show Available Books'}
//                 </button>
//             </div>

//             {viewType === 'card' ? (
//                 <section className='my-16'>
//                     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
//                         {filteredBooks.map(book => <BookCard key={book._id} book={book}></BookCard>)}
//                     </div>
//                 </section>
//             ) : (
//                 <BookTable allBooks={filteredBooks}></BookTable>
//             )}
//         </div>
//     );
// };

// export default AllBookPage;
