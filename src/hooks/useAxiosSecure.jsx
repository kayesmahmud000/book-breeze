import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:`${import.meta.env.VITE_Project_Api_Url}`,
   withCredentials:true
  })

const useAxiosSecure = () => {
    const {logOut}=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        }, error=>{
            
            if(error.status === 401 || error.status === 403){
                logOut()
                .then(result=>{
                    navigate:('/login')
                })
                .catch(err=>{
                    // console.log(err)
                })
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance
};

export default useAxiosSecure;