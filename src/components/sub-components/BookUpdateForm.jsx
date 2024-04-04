import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookUpdateForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookInfo = useLoaderData();
    const {
      _id,  name, image, author, category, price, edition, section, shelf, description
    } = bookInfo;

    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const author = form.author.value;
        const edition = form.edition.value;
        const price = form.price.value;
        const image = form.image.value;
        const section = form.section.value;
        const shelf = form.shelf.value;
        const description = form.description.value;

        const updateBook = {
            name, category, author, edition, price, image, section, shelf, description
        }

        fetch(`http://localhost:5000/books/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Book updated successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/viewbook');
                }
            })
    }
    return (
        <div className="py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Update A Book</h1>
            </div>
            <form onSubmit={handleUpdateBook} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Name</span>
                        </label>
                        <input type="text" placeholder="Enter Book Name" name="name" defaultValue={name} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Category</span>
                        </label>
                        <input type="text" placeholder="Enter Book Category" name="category" defaultValue={category} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Author Name</span>
                        </label>
                        <input type="text" placeholder="Enter Author Name" name="author" defaultValue={author} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Edition</span>
                        </label>
                        <input type="text" placeholder="Enter Book Edition" name="edition" defaultValue={edition} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Price</span>
                        </label>
                        <input type="text" placeholder="Enter Book Price" name="price" defaultValue={price} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Image URL</span>
                        </label>
                        <input type="text" placeholder="Enter Image URL" name="image" defaultValue={image} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Library Section</span>
                        </label>
                        <input type="text" placeholder="Enter Library Section" name="section" defaultValue={section} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Shelf No</span>
                        </label>
                        <input type="text" placeholder="Enter Shelf No" name="shelf" defaultValue={shelf} className="input rounded-md" />
                    </div>
                    <div className="form-control col-span-1 md:col-span-2 ">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Description</span>
                        </label>
                        <textarea placeholder="Enter Book Description" name="description" defaultValue={description} className="textarea col-span-1 md:col-span-2 h-48 rounded-md"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Update Book Details" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default BookUpdateForm;