import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    const {signinUser, socialLogin}=useContext(AuthContext)
    const handleLogin =e =>{
        e.preventDefault()
        const form= e.target
        const email= form.email.value
        const password= form.password.value
        signinUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleSocial=()=>{
        socialLogin()
        .then(result=>{
            console.log()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='flex bg-gray-300 min-h-screen items-center justify-center'>
        <div className="card px-4 bg-base-100 w-full max-w-xl shadow-2xl">
        <h3 className='text-4xl font-bold text-center my-6'> Login Your Account</h3>
            <form onSubmit={handleLogin} className="card-body">
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#3385ff] text-white hover:text-black">Login</button>
                </div>
            </form>
            <div class="divider px-10 mb-4">OR</div>
           < div className='flex justify-center'>
                <button onClick={handleSocial} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'><FcGoogle /> Continue With Google</button>
            </div>
            <p className='text-lg text-center py-5'>Don't have an account ? Please <Link to={"/register"}><span className='text-[#be4bdb] underline'>Register</span></Link></p>
        </div>
    </div>
    );
};

export default LoginPage;