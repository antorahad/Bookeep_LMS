import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import AddBook from "../components/AddBook";
import AddMember from "../components/AddMember";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/addbook',
                element: <AddBook/>
            },
            {
                path: '/addmember',
                element: <AddMember/>
            }
        ]
    },
]);

export default router;