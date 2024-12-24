

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import TitleHelmet from "../components/TitleHelmet";
import toast from "react-hot-toast";

const DetailsPage = () => {
    const [isModal, setIsModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [hasBorrowed, setHasBorrowed] = useState(false);
    const [error, setError] = useState(null);
    console.log(error)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/books/${id}`)
            .then(res => setBook(res.data));
    }, [id]);

    useEffect(() => {
        // Fetch the list of books the user has currently borrowed
        axios.get(`${import.meta.env.VITE_Project_Api_Url}/borrowed-books/${user.email}`)
            .then(res => setBorrowedBooks(res.data));
    }, [user.email]);

    useEffect(() => {
        // Check if the user has already borrowed this book
        if (borrowedBooks.some(borrowedBook => borrowedBook.bookId === id)) {
            setHasBorrowed(true);
        } else {
            setHasBorrowed(false);
        }
    }, [borrowedBooks, id]);

    const handleBorrowModal = () => {
        setIsModal(true);
    };

    const handleBorrow = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const bookId = book._id;
        const returnDate = startDate.toLocaleDateString("en-CA");
        setIsModal(false);

        const borrowData = {
            email,
            name,
            bookId,
            returnDate,
        };

        try {
            const response = await axios.patch(`${import.meta.env.VITE_Project_Api_Url}/borrow-book/${book._id}`, borrowData);
            console.log(response.data);

            // Update the book's quantity locally
            setBook(prevBook => ({
                ...prevBook,
                quantity: prevBook.quantity - 1
            }));

            // Add the borrowed book to the list of borrowed books
            setBorrowedBooks(prevBorrowedBooks => [...prevBorrowedBooks, borrowData]);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
                toast.error(error.response.data.message)
            }
            console.error('Error borrowing the book:', error);
        }
    };

    return (
        <div className="max-w-4xl flex min-h-screen items-center justify-center px-4 mx-auto my-10">
            <TitleHelmet title={'Details'} />
            <div className="card flex flex-col md:flex-row card-side bg-gray-300 shadow-xl">
                <figure>
                    <img
                        src={book.photo}
                        alt={book.name}
                        className="h-full w-80" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{book.name}</h2>
                    <p><strong>Author:</strong> {book.authorName}</p>
                    <p><strong>Category:</strong> {book.category}</p>
                    <p><strong>Quantity:</strong> {book.quantity}</p>
                    <p className="flex gap-2"><strong>Rating:</strong> <div className="review-rating text-yellow-500">
                        {"★".repeat(book.rating) + "☆".repeat(5 - book.rating)}
                    </div></p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Book Content:</strong> {book.content}</p>
                    <div className="card-actions">
                        <button
                            className={`btn ${book.quantity > 0 && !hasBorrowed ? 'bg-[#e63746] text-white' : 'bg-gray-400 text-gray-800'}`}
                            disabled={book.quantity === 0 || hasBorrowed}
                            onClick={handleBorrowModal}
                        >
                            {hasBorrowed ? 'Already Borrowed' : book.quantity > 0 ? 'Borrow' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </div>
            {isModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white text-center justify-center items-start p-6 rounded-md shadow-md">
                        <form onSubmit={handleBorrow} className="card-body">
                            <div className="mb-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user.email} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="form-control w-full mr-5">
                                    <label className="label">
                                        <span className="label-text">Author Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter First Name" className="input input-bordered w-full" defaultValue={user.displayName} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="form-control w-full mr-5">
                                    <label className="label">
                                        <span className="label-text">Book Return date</span>
                                    </label>
                                    <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#e63746] text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Borrow</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;


