import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NoFoundPage></NoFoundPage>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/toydetails",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            }         
        ]
    },
]);

export default router;