import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MemberUpdateForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const memberInfo = useLoaderData();
    const {_id, identity, name, contact, join, membership, image, account, fee, address} = memberInfo;

    const handleUpdateMember = e => {
        e.preventDefault();
        const form = e.target;
        const identity = form.identity.value;
        const name = form.name.value;
        const contact = form.contact.value;
        const join = form.join.value;
        const membership = form.membership.value;
        const image = form.image.value;
        const account = form.account.value;
        const fee = form.fee.value;
        const address = form.address.value;

        const updateMember = {
            identity, name, contact, join, membership, image, account, fee, address
        }

        fetch(`https://lms-server-beta.vercel.app/members/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMember)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Member Updated Successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/viewmember');
                }
            })
    }
    return (
        <div className="py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Update Member</h1>
            </div>
            <form onSubmit={handleUpdateMember} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member ID</span>
                        </label>
                        <input type="text" placeholder="Enter Member Id" name="identity" defaultValue={identity} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Name</span>
                        </label>
                        <input type="text" placeholder="Enter Member Name" name="name" defaultValue={name} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Contact</span>
                        </label>
                        <input type="text" placeholder="Enter Member Contact" name="contact" defaultValue={contact} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Joining Date</span>
                        </label>
                        <input type="date" name="join" defaultValue={join} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Membership Status</span>
                        </label>
                        <select
                            className="select rounded-md"
                            name="membership" defaultValue={membership}
                        >
                            <option value="">
                                Select Membership
                            </option>
                            <option value="Basic Membership">Basic Membership</option>
                            <option value="Premium Membership">Premium Membership</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Account Status</span>
                        </label>
                        <select
                            className="select rounded-md"
                            name="account" defaultValue={account}
                        >
                            <option value="">
                                Account Status
                            </option>
                            <option value="Running">Running</option>
                            <option value="Close">Close</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Membership Fee</span>
                        </label>
                        <input type="text" placeholder="Enter Membership Fee" name="fee" defaultValue={fee} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Image URL</span>
                        </label>
                        <input type="text" placeholder="Enter Image URL" name="image" defaultValue={image} className="input rounded-md" />
                    </div>
                    <div className="form-control col-span-1 md:col-span-2 ">
                        <label className="label">
                            <span className="font-medium text-green-400">Current Address</span>
                        </label>
                        <textarea placeholder="Enter Current Address" name="address" defaultValue={address} className="textarea h-48 rounded-md"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Update Member" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default MemberUpdateForm;