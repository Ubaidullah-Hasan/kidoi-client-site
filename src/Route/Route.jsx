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
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NoFoundPage></NoFoundPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://kidoi-server.vercel.app/toys")
            },
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
                path: "/toydetails/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kidoi-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: () => fetch("https://kidoi-server.vercel.app/toys")
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kidoi-server.vercel.app/toys/${params.id}`)
            }
        ]
    },
]);

export default router;