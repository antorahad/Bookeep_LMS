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
import UpdateBook from "../components/UpdateBook";
import ViewMember from "../components/ViewMember";
import MemberDetail from "../components/MemberDetail";
import UpdateMember from "../components/UpdateMember";
import ViewSection from "../components/ViewSection";
import UpdateSection from "../components/UpdateSection";
import ViewIssuedBook from "../components/ViewIssuedBook";
import UpdateIssuedBook from "../components/UpdateIssuedBook";
import ViewReturnedBook from "../components/ViewReturnedBook";
import UpdateReturnedBook from "../components/UpdateReturnedBook";
import Error from "../error/Error";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
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
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/books/${params.id}`)
            },
            {
                path: '/updatebook/:id',
                element: <PrivateProvider><UpdateBook/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/books/${params.id}`)
            },
            
            {
                path: '/addmember',
                element: <PrivateProvider><AddMember/></PrivateProvider>
            },
            {
                path: '/viewmember',
                element: <PrivateProvider><ViewMember/></PrivateProvider>
            },
            {
                path: '/memberdetail/:id',
                element: <PrivateProvider><MemberDetail/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/members/${params.id}`)
            },
            {
                path: '/updatemember/:id',
                element: <PrivateProvider><UpdateMember/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/members/${params.id}`)
            },
            {
                path: '/addsection',
                element: <PrivateProvider><AddSection/></PrivateProvider>
            },
            {
                path: '/viewsection',
                element: <PrivateProvider><ViewSection/></PrivateProvider>
            },{
                path: '/updatesection/:id',
                element: <PrivateProvider><UpdateSection/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/sections/${params.id}`)
            },

            {
                path: '/issuebook',
                element: <PrivateProvider><IssuedBook/></PrivateProvider>
            },
            {
                path: '/viewissuedbook',
                element: <PrivateProvider><ViewIssuedBook/></PrivateProvider>
            },
            {
                path: '/updateissuedbook/:id',
                element: <PrivateProvider><UpdateIssuedBook/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/issues/${params.id}`)
            },
            {
                path: '/returnbook',
                element: <PrivateProvider><ReturnBook/></PrivateProvider>
            },
            {
                path: '/viewreturnedbook',
                element: <PrivateProvider><ViewReturnedBook/></PrivateProvider>
            },
            {
                path: '/updatereturnedbook/:id',
                element: <PrivateProvider><UpdateReturnedBook/></PrivateProvider>,
                loader: ({params}) => fetch(`https://lms-server-beta.vercel.app/returns/${params.id}`)
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