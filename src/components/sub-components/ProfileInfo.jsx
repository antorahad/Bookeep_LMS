import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.png"
const ProfileInfo = ({ item }) => {
    const {_id, name, email, gender, contact, image, address } = item;
    return (
        <div>
            <div className="w-[200px] h-[200px] mb-5">
                {
                    image ? 
                    <img src={image} alt="Profile Image" className="w-[200px] h-[200px] object-cover rounded-md"/>
                    :
                    <img src={profileImage} alt="Profile Image"/>
                }
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-white text-xl font-bold">Name: {name}</p>
                <p className="text-white text-xl font-bold">Gender: {gender}</p>
                <p className="text-white text-xl font-bold">Email: {email}</p>
                <p className="text-white text-xl font-bold">Contact No: {contact}</p>
                <p className="text-white text-xl font-bold">Address: {address}</p>
            </div>
            <Link to={`/updateprofile/${_id}`}>
                <button className="btn btn-sm bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white text-xs border-none outline-none rounded-md mt-5">Edit Profile</button>
            </Link>
        </div>
    );
};

export default ProfileInfo;