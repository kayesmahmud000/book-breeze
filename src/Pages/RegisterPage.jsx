import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
    const {signUpUser, setUser,socialLogin, updateUser}=useContext(AuthContext)
    const [errorMassage, setErrorMassage ]=useState('')
    const navigate= useNavigate()
    const handleRegisterFrom = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        if(password.length<6){
            setErrorMassage(' Length must be at least 6 character')
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
        if(!passwordRegex.test(password)){
            setErrorMassage('must have an Uppercase letter, a lowercase letter')
            return
        }
        console.log(name, email, photo, password)
        signUpUser(email, password)

        .then(result=>{
            const user =result.user
            setUser(user)
            updateUser({displayName:name, photoURL:photo})
            .then(()=>{
                navigate('/')
                // toast.success("Register Successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log( errorCode ,errorMessage)
                // toast.error("Login Filed")
              });
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
            <h3 className='text-4xl font-bold text-center my-6'> Register Your Account</h3>
                <form onSubmit={handleRegisterFrom} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                        errorMassage &&  <label className="label">
                        <span className="label-text text-sm text-red-500">{errorMassage}</span>
                    </label>
                       }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3385ff] text-white hover:text-black">Register</button>
                    </div>
                </form>
                <div class="divider px-10 mb-4">OR</div>
               < div className='flex justify-center'>
                    <button onClick={handleSocial} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'><FcGoogle /> Continue With Google</button>
                </div>
                <p className='text-lg text-center py-5'>Already have an account ? Please <Link to={"/login"}><span className='text-[#be4bdb] underline'>Login</span></Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;