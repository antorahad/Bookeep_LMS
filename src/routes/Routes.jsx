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
import ViewProfile from "../components/ViewProfile";
import UpdateProfile from "../components/UpdateProfile";
import PrivateProvider from "../private/PrivateProvider";
import ViewBook from "../components/ViewBook";
import BookDetail from "../components/BookDetail";

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
                path: '/viewbook',
                element: <PrivateProvider><ViewBook/></PrivateProvider>
            },
            {
                path: '/bookdetail/:id',
                element: <PrivateProvider><BookDetail/></PrivateProvider>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
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
            },
            {
                path: '/viewprofile',
                element: <PrivateProvider><ViewProfile/></PrivateProvider>,
            },
            {
                path: '/updateprofile/:id',
                element: <PrivateProvider><UpdateProfile/></PrivateProvider>

            }
        ]
    },
]);

export default router;