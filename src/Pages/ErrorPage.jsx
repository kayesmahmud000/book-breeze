import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='my-20 flex flex-col justify-center items-center gap-10'>
            <h3 className='text-4xl text-center font-bold '>No Content is Hare</h3> 
             <Link to={"/"}><button className='btn bg-[#4DA1A9] hover:border-[#4DA1A9] text-white hover:bg-white hover:text-black'>Back to Home </button></Link>


        </div>
    );
};

export default ErrorPage;