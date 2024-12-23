
// import { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import AuthContext from "../context/AuthContext";
// import axios from "axios";

// const DetailsPage = () => {
//     const [isModal, setIsModal] = useState(false)
//     const [startDate, setStartDate] = useState(new Date());
//     const {user}= useContext(AuthContext)
//     const book = useLoaderData()
//     console.log(book)
//     const handleBorrowModal = () => {
//         setIsModal(true)
//     }

//     const handleBorrow=e=>{
//         e.preventDefault()
//        const form =e.target
//        const email= form.email.value 
//        const name= form.name.value 
//        const bookId= book._id
//        const returnDate = startDate.toLocaleDateString("en-CA")
//        setIsModal(false)
//        const borrowData= {
//         email, name, bookId, returnDate, 
//        }
//        axios.patch(`${import.meta.env.VITE_Project_Api_Url}/borrow-book/${book._id}`, borrowData)
//        .then(res=>console.log(res.data))
      
        
//     }
//     return (
//         <div className="max-w-4xl mx-auto my-10">
//             <div className="card card-side bg-base-100 shadow-xl">
//                 <figure>
//                     <img
//                         src={book.photo}
//                         alt={book.name} />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{book.name}</h2>
//                     <p><strong>Author:</strong> {book.authorName}</p>
//                     <p><strong>Category:</strong> {book.category}</p>
//                     <p><strong>Quantity:</strong> {book.quantity}</p>
//                     <p><strong>Rating:</strong> {book.rating}</p>
//                     <p><strong>Description:</strong> {book.description}</p>
//                     <p><strong>Book Content:</strong> {book.content}</p>
//                     <div className="card-actions ">
//                         <button
//                             className={`btn ${book.quantity > 0 ? 'bg-[#e63746] text-white' : 'bg-gray-400 text-gray-800'}`}
//                             disabled={book.quantity === 0}
//                             onClick={handleBorrowModal}
//                         >
//                             {book.quantity > 0 ? 'Borrow' : 'Out of Stock'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isModal && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="bg-white text-center justify-center items-start p-6 rounded-md shadow-md">

//                         <form onSubmit={ handleBorrow} className="card-body">
//                             <div className="mb-4">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user.email} required />
//                                 </div>

//                             </div>
//                             <div className=" mb-4">
//                                 <div className="form-control w-full mr-5">
//                                     <label className="label">
//                                         <span className="label-text">Author Name</span>
//                                     </label>
//                                     <input type="text" name="name" placeholder="Enter First Name" className="input input-bordered w-full" defaultValue={user.displayName} required />
//                                 </div>
                               
//                             </div>
//                             <div className=" mb-4">
//                                 <div className="form-control w-full mr-5">
//                                     <label className="label">
//                                         <span className="label-text"> Book Return date</span>
//                                     </label>
//                                     <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                                   
//                                 </div>
                                
//                             </div>


//                             <div className="form-control mt-6">
//                                 <button className="btn  bg-[#e63746]  text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Borrow</button>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DetailsPage;

import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const DetailsPage = () => {
    const [isModal, setIsModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const book = useLoaderData();

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

        axios.patch(`${import.meta.env.VITE_Project_Api_Url}/borrow-book/${book._id}`, borrowData)
        .then(res=>console.log(res.data))

        // try {
        //     const response = await fetch(
        //         `${import.meta.env.VITE_Project_Api_Url}/borrow-book/${book._id}`,
        //         {
        //             method: 'PATCH',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(borrowData),
        //         }
        //     );

        //     if (!response.ok) {
        //         throw new Error('Failed to borrow the book');
        //     }

        //     const result = await response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error('Error borrowing the book:', error);
        // }
    };

    return (
        <div className="max-w-4xl mx-auto my-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={book.photo}
                        alt={book.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{book.name}</h2>
                    <p><strong>Author:</strong> {book.authorName}</p>
                    <p><strong>Category:</strong> {book.category}</p>
                    <p><strong>Quantity:</strong> {book.quantity}</p>
                    <p><strong>Rating:</strong> {book.rating}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Book Content:</strong> {book.content}</p>
                    <div className="card-actions ">
                        <button
                            className={`btn ${book.quantity > 0 ? 'bg-[#e63746] text-white' : 'bg-gray-400 text-gray-800'}`}
                            disabled={book.quantity === 0}
                            onClick={handleBorrowModal}
                        >
                            {book.quantity > 0 ? 'Borrow' : 'Out of Stock'}
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
                            <div className=" mb-4">
                                <div className="form-control w-full mr-5">
                                    <label className="label">
                                        <span className="label-text">Author Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter First Name" className="input input-bordered w-full" defaultValue={user.displayName} required />
                                </div>
                            </div>
                            <div className=" mb-4">
                                <div className="form-control w-full mr-5">
                                    <label className="label">
                                        <span className="label-text"> Book Return date</span>
                                    </label>
                                    <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-[#e63746]  text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Borrow</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;

