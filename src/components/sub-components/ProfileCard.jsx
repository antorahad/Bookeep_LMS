import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {   
    const {user} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const url = `https://lms-server-beta.vercel.app/users?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [url])
    return (
        <div className="min-h-screen px-5 py-10">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">My Profile</h1>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                {
                    userInfo.map(item => <ProfileInfo key={item._id} item={item}></ProfileInfo>)
                }
            </div>
        </div>
    );
};

export default ProfileCard;
