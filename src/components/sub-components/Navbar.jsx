import { useContext } from "react";
import { BsBookHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import profileIcon from "../../assets/profile.png"
const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <div className="navbar px-5 py-3 bg-white bg-opacity-10 shadow-sm">
            <div className="navbar-start">
                <Link to={'/home'}>
                    <h1 className="text-2xl text-white font-bold flex items-center gap-2 cursor-pointer hover:text-green-500 hover:bg-slate-100 rounded-md py-1 px-2 transition delay-100 duration-300 ease-in-out"><BsBookHalf />Bookeep</h1>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="w-14 me-3 tooltip tooltip-bottom cursor-pointer" data-tip={user.email}>
                    <Link to={'/viewprofile'}>
                        <img src={profileIcon} alt="icon"/>
                    </Link>
                </div>
                <button onClick={logout} className="btn bg-red-400 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md">Log Out</button>
            </div>
        </div>
    );
};

export default Navbar;