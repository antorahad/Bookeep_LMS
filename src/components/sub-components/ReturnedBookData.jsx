import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReturnedBookData = ({item, handleDeleteReturnedBook}) => {
    const {_id, memberName, bookName, category, author, issueDate, expireDate, returnDate, lateFee} = item;

    return (
        <tr>
            <td>{memberName}</td>
            <td>{bookName}</td>
            <td>{category}</td>
            <td>{author}</td>
            <td>{issueDate}</td>
            <td>{expireDate}</td>
            <td>{returnDate}</td>
            <td>{lateFee}</td>
            <td className="flex items-center justify-center gap-3">
                <Link to={`/updatereturnedbook/${_id}`}>
                    <FaEdit className="text-yellow-400 hover:text-yellow-500 cursor-pointer" />
                </Link>
                <FaTrash onClick={() => handleDeleteReturnedBook(_id)} className="ml-3 text-red-400 hover:text-red-500 cursor-pointer" />
            </td>
        </tr>
    );
};

export default ReturnedBookData;