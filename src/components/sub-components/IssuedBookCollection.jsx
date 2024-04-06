import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";
import IssuedBookData from "./IssuedBookData";
import { RiFileSearchLine } from "react-icons/ri";

const IssuedBookCollection = () => {
    const { user } = useContext(AuthContext);
    const [issuedBookCollection, setIssuedBookCollection] = useState([]);
    const url = `https://lms-server-beta.vercel.app/issues?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setIssuedBookCollection(data))
    }, [url])

    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const filterIssuedBookCollection = issuedBookCollection.filter(item => item.memberName.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.bookName.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase()) || item.section.toLowerCase().includes(search.toLowerCase()));

    const handleDeleteIssuedBook = _id => {
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
                fetch(`https://lms-server-beta.vercel.app/issues/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Issued book deleted successfully",
                                icon: "success",
                            });
                            setIssuedBookCollection(issuedBookCollection.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    };
    return (
        <div className="px-5 py-10 min-h-screen">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Issued Book List</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <RiFileSearchLine className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search Issued Book Here..."
                        className="pl-10 pr-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3 bg-white bg-opacity-10 text-slate-400 border-slate-400 focus:border-slate-400"
                    />
                </div>
                <div className="mt-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-white text-lg bg-white bg-opacity-10 text-center h-20">
                                <tr>
                                    <th>Name</th>
                                    <th>Book</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                    <th>Library Section</th>
                                    <th>Bookshelf</th>
                                    <th>Issue Date</th>
                                    <th>Expire Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                filterIssuedBookCollection.length > 0 ?
                                    <tbody className="bg-white bg-opacity-10 text-center text-lg text-white">
                                        {
                                            filterIssuedBookCollection.map(item => <IssuedBookData key={item._id} item={item} handleDeleteIssuedBook={handleDeleteIssuedBook} />)
                                        }
                                    </tbody>
                                    :
                                    <tbody className="bg-white bg-opacity-10 text-center text-lg text-white">
                                        <tr>
                                            <td colSpan="9">No data available</td>
                                        </tr>
                                    </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuedBookCollection;