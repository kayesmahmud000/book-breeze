import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import AuthContext from '../context/AuthContext';
import { app } from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loader, setLoader]=useState(true)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    
    const signUpUser=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }
    const signinUser=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(updateData)=>{
       return updateProfile(auth.currentUser ,updateData)
    }
    const socialLogin=()=>{
        return signInWithPopup( auth, provider)

    }
    useEffect(()=>{
     const unsubscribe=  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)

            if(currentUser?.email){
                const user={ email: currentUser.email}

                axios.post(`${import.meta.env.VITE_Project_Api_Url}/jwt`, user , {withCredentials:true} )
                .then(res=>{
                    console.log(res.data)
                    setLoader(false)
                })
            }else{
                axios.post(`${import.meta.env.VITE_Project_Api_Url}/logout`, {}, {withCredentials:true})
                .then(res=>{
                    console.log('logout', res.data)
                    setLoader(false)
                })
            }

            
        })

        return ()=>{
            unsubscribe()
        }
    },[])
   const logOut=()=>{
        return signOut(auth)
    }
    const authInfo ={
        user,
        loader,
        setUser,
        signUpUser,
        signinUser,
        logOut,
        updateUser,
        socialLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;