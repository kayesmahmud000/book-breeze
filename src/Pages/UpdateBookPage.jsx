import { Link, useLoaderData } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import axios from "axios";
import Swal from "sweetalert2";
import TitleHelmet from "../components/TitleHelmet";

const UpdateBookPage = () => {
    const book= useLoaderData()
    console.log(book)
    const handleUpdateBook=e=>{
        e.preventDefault()
        const formData =new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const {rating, quantity, ...updateBookData }=initialData
       

        updateBookData.rating =parseInt(rating)
        updateBookData.quantity= parseInt(quantity)
        console.log(updateBookData)
        // axios.put(`${import.meta.env.VITE_Project_Api_Url}/book/${book._id}`, updateBookData)
        // .then(res=>console.log(res.data))
        fetch(`${import.meta.env.VITE_Project_Api_Url}/book/${book._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateBookData)
        } )
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                        title: 'Success!',
                        text: 'Book Update successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                       heightAuto:true
                  })
            }})
        
    }
    return (
        <div className="max-w-7xl mx-auto">
              <TitleHelmet title={'Update'}></TitleHelmet>
          
             <div className="card rounded-none text-black bg-[#f2faef] w-full max-w-7xl px-4 mx-auto ">
             <PageHeading title={"Modify Book Information"} subtitle={"Update the book details to reflect the most current information."}></PageHeading>
                <form onSubmit={handleUpdateBook} className="card-body">
                    {/* 1st row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text"> Book Image</span>
                            </label>
                            <input type="text" defaultValue={book.photo} name="photo" placeholder="Book image url" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" defaultValue={book.name} name="name" placeholder="Book name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Category </span>
                            </label>
                            <select name="category"  id=" book" defaultValue={book.category} className="input input-bordered w-full">
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
                            <input type="text" defaultValue={book.authorName} name="authorName" placeholder="author name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                     {/* 3rd row */}
                    <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" defaultValue={book.rating} name="rating" placeholder="rating (1-5)" className="input input-bordered w-full" min={1} max={5} required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" defaultValue={book.quantity} name="quantity" placeholder="Quantity" className="input input-bordered w-full" min={0} required />
                        </div>
                    </div>
                    
                   
                    <div className="form-control mt-6">
                        <button className="btn bg-[#4DA1A9] hover:border-[#4DA1A9] text-white hover:bg-white hover:text-black">Submit</button>
                    </div>
                </form>

            </div>
            <div className="my-10">
                    <Link to={"/allBook"}><button className="btn btn-xs md:btn-sm bg-[#e63746] rounded-md border-none text-white hover:bg-white hover:text-black">Go Back</button></Link>
                </div>
        </div>
    );
};

export default UpdateBookPage;