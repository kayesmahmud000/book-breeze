import axios from "axios";
import PageHeading from "../components/PageHeading";
import Swal from "sweetalert2";
import TitleHelmet from "../components/TitleHelmet";


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
         .then(res=>{
            const data=res.data
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                        title: 'Success!',
                        text: 'A New Book Added successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                       heightAuto:true
                  })
                  form.reset()
            }
         } )
       
    }
    return (
        <div>
            <TitleHelmet title={'Add Book'}></TitleHelmet>
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
                  
                    <div className="form-control mt-6">
                        <button className="btn bg-[#4DA1A9] hover:border-[#4DA1A9] text-white hover:bg-white hover:text-black">Add new Book</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddBookPage;