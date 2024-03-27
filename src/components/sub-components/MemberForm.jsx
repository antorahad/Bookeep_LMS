const MemberForm = () => {
    return (
        <div className="py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Add A New Member</h1>
            </div>
            <form className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member ID</span>
                        </label>
                        <input type="text" placeholder="Enter Member Id" name="identity" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Name</span>
                        </label>
                        <input type="text" placeholder="Enter Member Name" name="name" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Contact</span>
                        </label>
                        <input type="text" placeholder="Enter Member Contact" name="contact" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Joining Date</span>
                        </label>
                        <input type="date" name="join" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Membership Status</span>
                        </label>
                        <select
                            className="select rounded-md"
                            name="membership"
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
                            name="account"
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
                        <input type="text" placeholder="Enter Membership Fee" name="fee" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Image URL</span>
                        </label>
                        <input type="text" placeholder="Enter Image URL" name="image" className="input rounded-md" />
                    </div>
                    <div className="form-control col-span-1 md:col-span-2 ">
                        <label className="label">
                            <span className="font-medium text-green-400">Current Address</span>
                        </label>
                        <textarea placeholder="Enter Current Address" name="address" className="textarea h-48 rounded-md"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Add New Member" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default MemberForm;