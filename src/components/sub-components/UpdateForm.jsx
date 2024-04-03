import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = ({ item }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {_id, name, email, contact, image, address, gender } = item;
    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const gender = form.gender.value;
        const image = form.image.value;
        const address = form.address.value;
        const contact = form.contact.value;

        const updateUser = {
            name, gender, image, address, contact
        }

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Profile Updated Successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/viewprofile');
                }
            })
    }
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Update Profile</h1>
            </div>
            <form onSubmit={handleUpdateProfile} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Name</span>
                        </label>
                        <input type="text" defaultValue={name} name="name" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Gender</span>
                        </label>
                        <select
                            className="select rounded-md"
                            name="gender" defaultValue={gender}
                        >
                            <option value="">
                                Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Email</span>
                        </label>
                        <input type="email" defaultValue={email} name="email" className="input rounded-md" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Contact No</span>
                        </label>
                        <input type="text" placeholder="Enter Contact Number" defaultValue={contact} name="contact" className="input rounded-md" />
                    </div>
                    <div className="form-control col-span-1 md:col-span-2 ">
                    <label className="label">
                            <span className="font-medium text-green-400">Image URL</span>
                        </label>
                        <input type="text" placeholder="Enter Image URL" defaultValue={image} name="image" className="input rounded-md" />
                    </div>
                    <div className="form-control col-span-1 md:col-span-2 ">
                        <label className="label">
                            <span className="font-medium text-green-400">Address</span>
                        </label>
                        <textarea placeholder="Enter Your Address" defaultValue={address} name="address" className="textarea h-48 rounded-md"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Update Profile" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;