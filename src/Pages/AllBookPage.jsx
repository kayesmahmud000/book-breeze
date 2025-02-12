
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageHeading from '../components/PageHeading';
import BookCard from '../components/BookCard';
import BookTable from '../components/BookTable';
import TitleHelmet from '../components/TitleHelmet';

const AllBookPage = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [viewType, setViewType] = useState('card');
    const [showAvailable, setShowAvailable] = useState(false);
    const [sortByRating, setSortByRating] = useState(false);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/all-books`)
            .then(res => setAllBooks(res.data));
    }, []);

    const handleViewChange = (event) => {
        setViewType(event.target.value);
    };

    const handleFilterClick = () => {
        setShowAvailable(prevState => !prevState);
    };

    const handleSortByRating = () => {
        setSortByRating(prevState => !prevState);
    };

    let filteredBooks = showAvailable ? allBooks.filter(book => book.quantity > 0) : allBooks;

    if (sortByRating) {
        filteredBooks = [...filteredBooks].sort((a, b) => b.rating - a.rating);
    }

    return (
        <div className='container mx-auto px-4'>
            <TitleHelmet title={'All Book'} />
            <div>
                <PageHeading title={'Explore Our Entire Collection'} subtitle={'Browse through all the books in our library, discover new favorites, and update book details.'} />
            </div>
            <div className="flex my-10 justify-between mb-4">
                <select
                    className="form-select border text-black border-gray-700"
                    value={viewType}
                    onChange={handleViewChange}
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
                <button
                    onClick={handleFilterClick}
                    className="btn btn-md bg-[#4DA1A9] rounded-md border-none text-white hover:bg-white hover:text-black"
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
                <button
                    onClick={handleSortByRating}
                    className="btn btn-md bg-[#FF9F1C] rounded-md border-none text-white hover:bg-white hover:text-black"
                >
                    {sortByRating ? 'Default' : 'Sort by Rating'}
                </button>
            </div>

            {viewType === 'card' ? (
                <section className='my-16'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8'>
                        {filteredBooks.map(book => <BookCard key={book._id} book={book} />)}
                    </div>
                </section>
            ) : (
                <BookTable allBooks={filteredBooks} />
            )}
        </div>
    );
};

export default AllBookPage;

