import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NoFoundPage></NoFoundPage>,
    },
]);

export default router;