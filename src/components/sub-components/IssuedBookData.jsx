import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const IssuedBookData = ({ item, handleDeleteIssuedBook }) => {
    const { _id, memberName, bookName, category, author, section, shelf, issueDate, expireDate } = item;
    return (
        <tr>
            <td>{memberName}</td>
            <td>{bookName}</td>
            <td>{category}</td>
            <td>{author}</td>
            <td>{section}</td>
            <td>{shelf}</td>
            <td>{issueDate}</td>
            <td>{expireDate}</td>
            <td className="flex items-center justify-center gap-3">
                <Link to={`/updateissuedbook/${_id}`}>
                    <FaEdit className="text-yellow-400 hover:text-yellow-500 cursor-pointer" />
                </Link>
                <FaTrash onClick={() => handleDeleteIssuedBook(_id)} className="ml-3 text-red-400 hover:text-red-500 cursor-pointer" />
            </td>
        </tr>
    );
};

export default IssuedBookData;