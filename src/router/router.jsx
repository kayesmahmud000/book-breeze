import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AllBookPage from "../Pages/AllBookPage";
import AddBookPage from "../Pages/AddBookPage";
import BorrowedBooksPage from "../Pages/BorrowedBooksPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import UpdateBookPage from "../Pages/UpdateBookPage";
import PrivateRoute from "./PrivateRoute";
import CategoryBookPage from "../Pages/CategoryBookPage";
import DetailsPage from "../Pages/DetailsPage";
import ErrorPage from "../Pages/ErrorPage";
import AboutPage from "../Pages/AboutPage";
import Contact from "../Pages/Contact";
import ServiceDetails from "../Pages/ServiceDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/allBook',
            element:<PrivateRoute><AllBookPage></AllBookPage></PrivateRoute>
        },
        {
            path:'/addBook',
            element:<PrivateRoute><AddBookPage></AddBookPage></PrivateRoute>
        },
        {
            path:'/about',
            element:<AboutPage></AboutPage>
        }, 
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/serviceDetails/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_Project_Api_Url}/service/${params.id}`)
        },
        {
            path:"/updatePage/:id",
            element:<PrivateRoute><UpdateBookPage></UpdateBookPage></PrivateRoute>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_Project_Api_Url}/books/${params.id}`)
        },
        {
            path:'/categoryBookPage/:category',
            element:<PrivateRoute><CategoryBookPage></CategoryBookPage></PrivateRoute>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_Project_Api_Url}/category/${params.category}`)

        },
        {
            path:"/detailsPage/:id",
            element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
            // loader: ({params})=>fetch(`${import.meta.env.VITE_Project_Api_Url}/books/${params.id}`)
        },
        {
            path:'/borrowedBooks',
            element:<PrivateRoute><BorrowedBooksPage></BorrowedBooksPage></PrivateRoute>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/register',
            element:<RegisterPage></RegisterPage>
        },
       
       
      ]
    },
  ]);

export default router;