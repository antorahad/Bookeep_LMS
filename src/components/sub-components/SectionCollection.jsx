import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import { RiFileSearchLine } from "react-icons/ri";
import SectionData from "./SectionData";
import Swal from "sweetalert2";

const SectionCollection = () => {
    const { user } = useContext(AuthContext);
    const [sectionCollection, setSectionCollection] = useState([]);
    const url = `https://lms-server-beta.vercel.app/sections?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSectionCollection(data))
    }, [url])
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const filterSectionCollection = sectionCollection.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()));


    const handleDeleteSection = _id => {
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
                fetch(`https://lms-server-beta.vercel.app/sections/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Section deleted successfully",
                                icon: "success",
                            });
                            setSectionCollection(sectionCollection.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    };
    return (
        <div className="px-5 py-10 min-h-screen">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Library Section List</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <RiFileSearchLine className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search section here..."
                        className="pl-10 pr-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3 bg-white bg-opacity-10 text-slate-400 border-slate-400 focus:border-slate-400"
                    />
                </div>
                <div className="mt-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-white text-lg bg-white bg-opacity-10 text-center h-20">
                                <tr>
                                    <th>Section Name</th>
                                    <th>Book Category</th>
                                    <th>Total Book</th>
                                    <th>Number of Bookshelf</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white bg-opacity-10 text-center text-lg text-white">
                                {
                                    filterSectionCollection.map(item => <SectionData key={item._id} item={item} handleDeleteSection={handleDeleteSection} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCollection;