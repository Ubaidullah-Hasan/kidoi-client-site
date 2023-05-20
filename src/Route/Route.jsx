import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";

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
            }
        ]
    },
]);

export default router;