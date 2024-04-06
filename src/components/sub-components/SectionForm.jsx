import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SectionForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const handleAddSection = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const totalBook = form.totalBook.value;
        const totalShelf = form.totalShelf.value;
        const email = user.email;
        const newSection = {
            name, category, totalBook, totalShelf, email
        }

        console.log(newSection);
        fetch('https://lms-server-beta.vercel.app/sections', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSection)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Section added to database successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/viewsection');
                }
            })

    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Add Section</h1>
            </div>
            <form onSubmit={handleAddSection} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Section Name</span>
                        </label>
                        <input type="text" placeholder="Enter Section Name" name="name" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Category</span>
                        </label>
                        <input type="text" placeholder="Enter Book Category" name="category" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Number Of Books</span>
                        </label>
                        <input type="text" placeholder="Enter Number Of Books" name="totalBook" className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Number Of Bookshelf</span>
                        </label>
                        <input type="text" placeholder="Enter Number Of Bookshelf" name="totalShelf" className="input rounded-md" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Add Section" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default SectionForm;