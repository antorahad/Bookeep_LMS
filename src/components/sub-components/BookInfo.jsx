import { Link, useLoaderData } from "react-router-dom";

const BookInfo = () => {
    const bookDetail = useLoaderData();
    const {
        name, image, author, category, price, edition, section, shelf, description
    } = bookDetail;
    return (
        <div className="min-h-screen py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Book Details</h1>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <img src={image} alt="Profile Image" className="w-[200px] h-[200px] object-cover rounded-md"/>
                <div className="flex flex-col gap-3 my-5 text-white text-lg font-medium">
                    <p>Name: {name}</p>
                    <p>Category: {category}</p>
                    <p>Auhtor: {author}</p>
                    <p>Price: {price}TK</p>
                    <p>Edition: {edition} Edition</p>
                    <p>Library Section: {section}</p>
                    <p>Shelf No: {shelf}</p>
                    <p>Book Plot: {description}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to={'/'}>
                    <button className="btn btn-sm bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white text-xs border-none outline-none rounded-md">Edit Book</button>
                    </Link>
                    <Link to={'/'}>
                    <button className="btn btn-sm bg-red-400 hover:bg-red-500 focus:bg-red-500 text-white text-xs border-none outline-none rounded-md">Delete Book</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;