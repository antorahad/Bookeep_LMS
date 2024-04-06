import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import { MdPersonSearch } from "react-icons/md";
import MemberCards from "./MemberCards";
import Swal from "sweetalert2";

const MemberCollection = () => {
    const { user } = useContext(AuthContext);
    const [memberCollection, setMemberCollection] = useState([]);
    const url = `https://lms-server-beta.vercel.app/members?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMemberCollection(data))
    }, [url])

    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const filterMemberCollection = memberCollection.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.identity.toLowerCase().includes(search.toLowerCase()) || item.contact.toLowerCase().includes(search.toLowerCase()) || 
        item.membership.toLowerCase().includes(search.toLowerCase()) || item.account.toLowerCase().includes(search.toLowerCase())
        )

    const handleDeleteMember = _id => {
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
                fetch(`https://lms-server-beta.vercel.app/members/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Member deleted successfully",
                                icon: "success",
                            });
                            setMemberCollection(memberCollection.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    };
    return (
        <div className="px-5 py-10 min-h-screen">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">All Member List</h1>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <MdPersonSearch className="h-5 w-5 text-slate-400" />
                    </span>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search member here..."
                        className="pl-10 pr-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3 bg-white bg-opacity-10 text-slate-400 border-slate-400 focus:border-slate-400"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    {
                        filterMemberCollection.map(item => <MemberCards key={item._id} item={item} handleDeleteMember={handleDeleteMember} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MemberCollection;