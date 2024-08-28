import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Components/Signup/Signup";
import AppliedUser from "../Pages/Applicants/AppliedUser";
import About from "../Pages/About/About";
import JobListing from "../Pages/JobListing/JobListing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/applicants',
                element: <AppliedUser></AppliedUser>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/jobs',
                element: <JobListing></JobListing>
            }
        ]
    },
]);