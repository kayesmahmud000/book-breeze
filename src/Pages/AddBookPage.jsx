import axios from "axios";
import PageHeading from "../components/PageHeading";


const AddBookPage = () => {
    const handleAddBook= e =>{
        e.preventDefault()
        const formData =new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const {rating, quantity, ...bookData }=initialData
       

        bookData.rating =parseInt(rating)
        bookData.quantity= parseInt(quantity)
        console.log(bookData)
        

         axios.post(`${import.meta.env.VITE_Project_Api_Url}/add-book`,bookData)
         .then(res=> console.log(res.data))
       
    }
    return (
        <div>
            <div className="card rounded-none bg-[#f2faef] w-full max-w-7xl px-4 mx-auto ">
                <PageHeading title={"Add a New Book to Your Collection"} subtitle={"Fill in the details below to expand our library with another great read"}></PageHeading>

                <form onSubmit={handleAddBook} className="card-body">
                    {/* 1st row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text"> Book Image</span>
                            </label>
                            <input type="text" name="photo" placeholder="Book image url" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Book name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Category </span>
                            </label>
                            <select name="category" id=" book" defaultValue={'Select the Book Category'} className="input input-bordered w-full">
                                <option disabled className=''>Select the Book Category</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History"> History</option>
                                <option value="Drama">Drama</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name="authorName" placeholder="author name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                     {/* 3rd row */}
                    <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="rating (1-5)" className="input input-bordered w-full" min={1} max={5} required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" min={0} required />
                        </div>
                    </div>
                     {/* 4th row */}
                    <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-bordered" placeholder="description" required></textarea>
                        </div>
                        
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Content</span>
                            </label>
                            <textarea name='content' className="textarea textarea-bordered" placeholder="book content" required></textarea>
                        </div>
                    </div>
                    {/* <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Application Method</span>
                            </label>
                            <input type="text" name="application_method" placeholder="Application method" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Required_documents</span>
                            </label>
                            <div className='grid grid-cols-2 gap-2 justify-between'>
                                <label>
                                    <input type="checkbox" name="validPassport" value={'Valid passport'} checked={validPassport} onChange={(e) => setValidPassport(e.target.value)} />
                                    <span className="label-text"> Valid passport</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="visaApplication" value={" Visa application form"} checked={visaApplication} onChange={(e) => setVisaApplication(e.target.value)} />
                                    <span className="label-text"> Visa application form</span>
                                </label>
                                <label>
                                    <input type="checkbox" name="recentPassport" value={"Recent passport-sized photograph"} checked={recentPassport} onChange={(e) => setRecentPassport(e.target.value)} />
                                    <span className="label-text"> Recent passport-sized photograph</span>
                                </label>
                            </div>
                        </div>
                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#4DA1A9] hover:border-[#4DA1A9] text-white hover:bg-white hover:text-black">Add new Book</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddBookPage;