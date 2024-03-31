import { useContext, useEffect, useState } from "react";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import UpdateForm from "./sub-components/UpdateForm";
import { AuthContext } from "../authprovider/AuthProvider";

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const url = `http://localhost:5000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [url])
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen py-10 px-5">
            {
                userInfo.map(item => <UpdateForm key={item._id} item={item}/>)
            }
            </div>
            <Footer/>
        </div>
    );
};

export default UpdateProfile;