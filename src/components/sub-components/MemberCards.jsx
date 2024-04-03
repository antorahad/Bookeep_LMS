import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MemberCards = ({item, handleDeleteMember}) => {
    const {_id, name, identity, image, contact} = item
    return (
        <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={image} alt="Book Cover" className="h-80 w-full object-cover object-center" />
            <div className="flex flex-col justify-center items-center gap-3 absolute inset-0 bg-slate-900 bg-opacity-70 w-full p-5 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-sm font-medium text-center">
                <p>Name: {name}</p>
                <p>Member ID: {identity}</p>
                <p>Contact No: {contact}</p>
                <div className="flex items-center-center text-lg">
                    <Link to={`/updatemember/${_id}`}>
                        <FaEdit className="text-yellow-400 hover:text-yellow-500 cursor-pointer" />
                    </Link>
                    <FaTrash onClick={() => handleDeleteMember(_id)} className="ml-3 text-red-400 hover:text-red-500 cursor-pointer" />
                    <Link to={`/memberdetail/${_id}`}>
                        <FaEye className="ml-3 text-green-400 hover:text-green-500" />
                    </Link>  
                </div>
            </div>
        </div>
    );
};

export default MemberCards;