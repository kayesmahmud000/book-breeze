import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AllBookPage from "../Pages/AllBookPage";
import AddBookPage from "../Pages/AddBookPage";
import BorrowedBooksPage from "../Pages/BorrowedBooksPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/allBook',
            element:<AllBookPage></AllBookPage>
        },
        {
            path:'/addBook',
            element:<AddBookPage></AddBookPage>
        },
        {
            path:'/borrowedBooks',
            element:<BorrowedBooksPage></BorrowedBooksPage>
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