import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SectionData = ({ item, handleDeleteSection }) => {
    const {_id, name, category, totalBook, totalShelf } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{totalBook}</td>
            <td>{totalShelf}</td>
            <td className="flex items-center justify-center gap-3">
                <Link to={`/updatesection/${_id}`}>
                    <FaEdit className="text-yellow-400 hover:text-yellow-500 cursor-pointer" />
                </Link>
                <FaTrash onClick={() => handleDeleteSection(_id)} className="ml-3 text-red-400 hover:text-red-500 cursor-pointer" />
            </td>
        </tr>
    );
};

export default SectionData;