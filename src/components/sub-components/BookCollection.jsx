import { useContext, useEffect, useState } from "react";
import { RiFileSearchLine } from "react-icons/ri";
import { AuthContext } from "../../authprovider/AuthProvider";
import BookCards from "./BookCards";
import Swal from "sweetalert2";
import noData from "../../assets/noData.png";
const BookCollection = () => {
    const {user} = useContext(AuthContext);
    const [bookCollection, setBookCollection] = useState([]);
    const url = `https://lms-server-beta.vercel.app/books?email=${user?.email}`;
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

    const handleDeleteBook = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://lms-server-beta.vercel.app/books/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Book deleted successfully",
                                icon: "success",
                            });
                            setBookCollection(bookCollection.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    }; 

    return (
        <div className="px-5 py-10 min-h-screen">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Book List</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <RiFileSearchLine className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search Book Here..."
                        className="pl-10 pr-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3 bg-white bg-opacity-10 text-slate-400 border-slate-400 focus:border-slate-400"
                    />
                </div>
                {
                    filterBookCollection.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    {
                        filterBookCollection.map(item => <BookCards  key={item._id} item={item} handleDeleteBook={handleDeleteBook}/>)
                    }
                    </div>
                    :
                    <div className="min-h-screen flex items-center justify-center">
                        <img src={noData} alt="No data image" className="w-[300px]"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default BookCollection;