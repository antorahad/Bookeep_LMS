import { Link } from "react-router-dom";
import bookIcon from '../../assets/books.png';
import memberIcon from '../../assets/members.png';
import sectionIcon from '../../assets/section.png';
import issuedIcon from '../../assets/issued.png';
import returnIcon from '../../assets/return.png';
import profileIcon from '../../assets/profile.png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
const HomeCard = () => {
    const {user} = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const url = `https://lms-server-beta.vercel.app/books?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [url])

    const [members, setMembers] = useState([]);
    const url2 = `https://lms-server-beta.vercel.app/members?email=${user?.email}`;
    useEffect(() => {
        fetch(url2)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [url2])

    const [sections, setSections] = useState([]);
    const url3 = `https://lms-server-beta.vercel.app/sections?email=${user?.email}`;
    useEffect(() => {
        fetch(url3)
            .then(res => res.json())
            .then(data => setSections(data))
    }, [url3])
    
    const [issuedBooks, setIssuedBooks] = useState([]);
    const url4 = `https://lms-server-beta.vercel.app/issues?email=${user?.email}`;
    useEffect(() => {
        fetch(url4)
            .then(res => res.json())
            .then(data => setIssuedBooks(data))
    }, [url4])

    const [returnedBooks, setReturnedBooks] = useState([]);
    const url5 = `https://lms-server-beta.vercel.app/returns?email=${user?.email}`;
    useEffect(() => {
        fetch(url5)
            .then(res => res.json())
            .then(data => setReturnedBooks(data))
    }, [url5])

    return (
        <div className="px-5 py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={bookIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Book Collection</h1>
                        <p className="text-slate-400 font-medium">Total Books : {books.length}</p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addbook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Book</button>
                            </Link>
                            <Link to={'/viewbook'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Book</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={memberIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Library Member</h1>
                        <p className="text-slate-400 font-medium">Total Members : {members.length}</p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addmember'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Member</button>
                            </Link>
                            <Link to={'/viewmember'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Member</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={sectionIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Library Section</h1>
                        <p className="text-slate-400 font-medium">Total Sections : {sections.length}</p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addsection'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Section</button>
                            </Link>
                            <Link to={'/viewsection'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Section</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={issuedIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Book Issued</h1>
                        <p className="text-slate-400 font-medium">Total Book Issued : {issuedBooks.length}</p>
                        <div className="flex items-center gap-3">
                            <Link to={'/issuebook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Issued Book</button>
                            </Link>
                            <Link to={'/viewissuedbook'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Issued Book</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={returnIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Book Returned</h1>
                        <p className="text-slate-400 font-medium">Total Book Returned : {returnedBooks.length}</p>
                        <div className="flex items-center gap-3">
                            <Link to={'/returnbook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Returned Book</button>
                            </Link>
                            <Link to={'/viewreturnedbook'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Returned Book</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={profileIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Profile</h1>
                        <p className="text-slate-400 font-medium">Manage Your Profile</p>
                        <Link to={'/viewprofile'}>
                            <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">View Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;