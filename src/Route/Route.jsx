import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
    },
]);

export default router;