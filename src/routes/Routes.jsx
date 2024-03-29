import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import AddBook from "../components/AddBook";
import AddMember from "../components/AddMember";
import AddSection from "../components/AddSection";
import IssuedBook from "../components/IssuedBook";
import ReturnBook from "../components/ReturnBook";
import PrivateProvider from "../private/PrivateProvider";

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
                element: <PrivateProvider><Home/></PrivateProvider>
            },
            {
                path: '/addbook',
                element: <PrivateProvider><AddBook/></PrivateProvider>
            },
            {
                path: '/addmember',
                element: <PrivateProvider><AddMember/></PrivateProvider>
            },
            {
                path: '/addsection',
                element: <PrivateProvider><AddSection/></PrivateProvider>
            },
            {
                path: '/issuebook',
                element: <PrivateProvider><IssuedBook/></PrivateProvider>
            },
            {
                path: '/returnbook',
                element: <PrivateProvider><ReturnBook/></PrivateProvider>
            }
        ]
    },
]);

export default router;