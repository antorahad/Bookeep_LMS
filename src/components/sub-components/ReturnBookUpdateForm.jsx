import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReturnBookUpdateForm = () => {
    const returnBookInfo = useLoaderData();
    const {_id, memberName, bookName, category, author, issueDate, expireDate: initialExpireDate, returnDate: initialReturnDate, lateFee: initialLateFee} = returnBookInfo;
    const location = useLocation();
    const navigate = useNavigate();

    const [expireDate, setExpireDate] = useState(initialExpireDate);
    const [returnDate, setReturnDate] = useState(initialReturnDate);
    const [lateFee, setLateFee] = useState(initialLateFee);

    const handleExpireDateChange = e => {
        const newExpireDate = e.target.value;
        setExpireDate(newExpireDate);
        updateLateFee(newExpireDate, returnDate);
    };

    const handleReturnDateChange = e => {
        const newReturnDate = e.target.value;
        setReturnDate(newReturnDate);
        updateLateFee(expireDate, newReturnDate);
    };

    const updateLateFee = (expireDate, returnDate) => {
        const lateFeePerDay = 50;
        const expireDateTime = new Date(expireDate).getTime();
        const returnDateTime = new Date(returnDate).getTime();
        const daysLate = Math.max(0, (returnDateTime - expireDateTime) / (1000 * 3600 * 24));
        const newLateFee = daysLate * lateFeePerDay;
        setLateFee(newLateFee);
    };

    const handleUpdateReturnedBook = e => {
        e.preventDefault();
        const form = e.target;
        const memberName = form.memberName.value;
        const bookName = form.bookName.value;
        const category = form.category.value;
        const author = form.author.value;
        const issueDate = form.issueDate.value;

        const updateReturn = {
            memberName, bookName, category, author, issueDate, expireDate, returnDate, lateFee
        };

        fetch(`https://lms-server-beta.vercel.app/returns/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReturn)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Returned book updated successfully",
                        icon: "success"
                    });
                    form.reset();
                    navigate(location?.state ? location.state : '/viewreturnedbook');
                }
            });
    };

    return (
        <div className="min-h-screen py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Update A Returned Book</h1>
            </div>
            <form onSubmit={handleUpdateReturnedBook} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Member Name</span>
                        </label>
                        <input type="text" placeholder="Enter Member Name" name="memberName" defaultValue={memberName} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Book Name</span>
                        </label>
                        <input type="text" placeholder="Enter Book Name" name="bookName" defaultValue={bookName} className="input rounded-md" />
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
                            <span className="font-medium text-green-400">Issue Date</span>
                        </label>
                        <input type="date" name="issueDate" defaultValue={issueDate} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Expire Date</span>
                        </label>
                        <input type="date" name="expireDate" value={expireDate} onChange={handleExpireDateChange} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Return Date</span>
                        </label>
                        <input type="date" name="returnDate" value={returnDate} onChange={handleReturnDateChange} className="input rounded-md" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-medium text-green-400">Late Fee</span>
                        </label>
                        <input type="text" placeholder="Late Fee" name="lateFee" value={lateFee} readOnly className="input rounded-md" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Update Issued Book Details" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default ReturnBookUpdateForm;
