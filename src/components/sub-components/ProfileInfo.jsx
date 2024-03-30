import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.png"
const ProfileInfo = ({ item }) => {
    const {_id, name, email } = item;
    return (
        <div>
            <div className="w-[200px] h-[200px] mb-5">
                <img src={profileImage} alt="Profile Image" className="rounded-full" />
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-white text-xl font-bold">Name: {name}</p>
                <p className="text-white text-xl font-bold">Gender:</p>
                <p className="text-white text-xl font-bold">Email: {email}</p>
                <p className="text-white text-xl font-bold">Contact No:</p>
                <p className="text-white text-xl font-bold">Address:</p>
            </div>
            <Link to={`/updateprofile/${_id}`}>
                <button className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 text-white text-xs border-none outline-none rounded-md mt-5">Edit Profile</button>
            </Link>
        </div>
    );
};

export default ProfileInfo;