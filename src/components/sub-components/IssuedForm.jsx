import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const IssuedForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const handleIssuedBook = e => {
        e.preventDefault();
        const form = e.target;
        const memberName = form.memberName.value;
        const bookName = form.bookName.value;
        const category = form.category.value;
        const author = form.author.value;
        const section = form.section.value;
        const shelf = form.shelf.value;
        const issueDate = form.issueDate.value;
        const expireDate = form.expireDate.value;
        const email = user.email;
        const newIssue = {
            memberName,bookName,category,author,section,shelf,issueDate,expireDate,email
        };
        console.log(newIssue);
        fetch('https://lms-server-beta.vercel.app/issues', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newIssue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Book has been issued successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/viewissuedbook');
                }
            })
    }
    return (
        <div className="py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Add Issued Book</h1>
            </div>
            <form onSubmit={handleIssuedBook} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Name</span>
                        </label>
                        <input type="text" placeholder="Enter Member Name" name="memberName" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Name</span>
                        </label>
                        <input type="text" placeholder="Enter Book Name" name="bookName" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Category</span>
                        </label>
                        <input type="text" placeholder="Enter Book Category" name="category" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Author Name</span>
                        </label>
                        <input type="text" placeholder="Enter Author Name" name="author" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Library Section</span>
                        </label>
                        <input type="text" placeholder="Enter Library Section" name="section" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Shelf No</span>
                        </label>
                        <input type="text" placeholder="Enter Shelf No" name="shelf" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Issue Date</span>
                        </label>
                        <input type="date" name="issueDate" className="input rounded-md w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Expire Date</span>
                        </label>
                        <input type="date" name="expireDate" className="input rounded-md w-full" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Add Issued Book" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default IssuedForm;