import { useContext, useEffect, useState } from "react";
import { RiFileSearchLine } from "react-icons/ri";
import { AuthContext } from "../../authprovider/AuthProvider";
import BookCards from "./BookCards";
const BookCollection = () => {
    const {user} = useContext(AuthContext);
    const [bookCollection, setBookCollection] = useState([]);
    const url = `http://localhost:5000/books?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookCollection(data))
    }, [url])

    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(e.target.value);
      }

    const filterBookCollection = bookCollection.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="px-5 py-10 min-h-screen">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">All Book Collection</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <RiFileSearchLine className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search book here..."
                        className="pl-10 pr-4 py-2 border rounded-md w-1/3 bg-white bg-opacity-10 text-slate-400 border-slate-400 focus:border-slate-400"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    {
                        filterBookCollection.map(item => <BookCards  key={item._id} item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookCollection;