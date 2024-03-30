import { Link } from "react-router-dom";
import bookIcon from '../../assets/books.png';
import memberIcon from '../../assets/members.png';
import sectionIcon from '../../assets/section.png';
import issuedIcon from '../../assets/issued.png';
import returnIcon from '../../assets/return.png';
import profileIcon from '../../assets/profile.png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import Marquee from "react-fast-marquee"
const HomeCard = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [url])
    return (
        <div className="px-5 py-10 max-w-7xl mx-auto">
            <div className="mb-10">
                <Marquee pauseOnClick={true} pauseOnHover={true} speed={30} direction="right" className="bg-white bg-opacity-10 p-5">
                    {
                        userInfo.map(item => <p key={item._id} className="text-2xl text-white font-bold me-2">Hello! <span className="text-green-400">{
                            item.name ?
                            item.name 
                            :
                            user.email
                        }</span>.</p>)
                    }
                    <p className="text-2xl text-white font-bold me-2">Welcome to Bookeep Library Management System.</p>
                    <p className="text-2xl text-white font-bold me-2">Simplify library organization with Bookeep.</p>
                </Marquee>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card w-full bg-base-100 hover:bg-opacity-10 rounded-md shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="card-body">
                        <div className="w-[70px] h-[70px]">
                            <img src={bookIcon} alt="icon" />
                        </div>
                        <h1 className="text-2xl font-bold text-green-400">Book Collection</h1>
                        <p className="text-slate-400 font-medium">Total Books : </p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addbook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Book</button>
                            </Link>
                            <Link to={'/'}>
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
                        <p className="text-slate-400 font-medium">Total Members : </p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addmember'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Member</button>
                            </Link>
                            <Link to={'/'}>
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
                        <p className="text-slate-400 font-medium">Total Sections : </p>
                        <div className="flex items-center gap-3">
                            <Link to={'/addsection'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Add Section</button>
                            </Link>
                            <Link to={'/'}>
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
                        <p className="text-slate-400 font-medium">Total Book Issued : </p>
                        <div className="flex items-center gap-3">
                            <Link to={'/issuebook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Issue Book</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">Book List</button>
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
                        <p className="text-slate-400 font-medium">Total Book Returned : </p>
                        <div className="flex items-center gap-3">
                            <Link to={'/returnbook'}>
                                <button className="btn bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white border-none outline-none rounded-md">Return Book</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md">Book List</button>
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