import { Link } from "react-router-dom";

const BookCards = ({ item }) => {
    const { _id, name, category, author, image } = item
    return (
        <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link to={`/bookdetail/${_id}`}>
                <img src={image} alt="Book Cover" className="h-80 w-full object-cover object-center" />
                <div className="flex flex-col gap-1 absolute bottom-0 bg-white bg-opacity-50 w-full p-5">
                    <p className="text-slate-800 text-xs font-bold">Book: {name}</p>
                    <p className="text-slate-800 text-xs font-bold">Category: {category}</p>
                    <p className="text-slate-800 text-xs font-bold">Author: {author}</p>
                </div>
            </Link>
        </div>
    );
};

export default BookCards;