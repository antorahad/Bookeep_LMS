import { Link, useLoaderData } from "react-router-dom";

const MemberInfo = () => {
    const memberDetail = useLoaderData();
    const {
        name, image, contact, membership, account, fee, join, address, identity
    } = memberDetail;
    return (
        <div className="min-h-screen py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Member Details</h1>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <img src={image} alt="Profile Image" className="w-[200px] h-[200px] object-cover rounded-md"/>
                <div className="flex flex-col gap-3 my-5 text-white font-medium">
                    <p>Name: {name}</p>
                    <p>Member ID: {identity}</p>
                    <p>Contact No: {contact}</p>
                    <p>Joining Date: {join}</p>
                    <p>Membership: {membership}</p>
                    <p>Account Status: {account}</p>
                    <p>Monthly Fee: {fee} TK</p>
                    <p>Address: {address}</p>
                </div>
                <div>
                    <Link to={'/viewmember'}>
                        <button className="btn btn-sm bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white text-xs border-none outline-none rounded-md mt-5">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;