import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../authprovider/AuthProvider";

const ReturnForm = () => {
    const {user} = useContext(AuthContext);
    const [returnDate, setReturnDate] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [lateFee, setLateFee] = useState(0);

    const handleReturnBook = e => {
        e.preventDefault();
        const form = e.target;
        const memberName = form.memberName.value;
        const bookName = form.bookName.value;
        const category = form.category.value;
        const author = form.author.value;
        const section = form.section.value;
        const shelf = form.shelf.value;
        const issueDate = form.issueDate.value;
        const email = user.email;
        const newReturn = {
            memberName,bookName,category,author,section,shelf,issueDate,expireDate:returnDate,returnDate,lateFee,email
        }

        console.log(newReturn);

        fetch('http://localhost:5000/returns', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReturn)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Book has been returned successfully",
                        icon: "success"
                    });
                    form.reset();
                    setReturnDate(''); // Reset returnDate state
                    setExpireDate(''); // Reset expireDate state
                    setLateFee(0); // Reset lateFee state
                }
            })
    }
    
    const handleReturnDateChange = (event) => {
        setReturnDate(event.target.value);
        calculateLateFee(event.target.value, expireDate);
    };

    const handleExpireDateChange = (event) => {
        setExpireDate(event.target.value);
        calculateLateFee(returnDate, event.target.value);
    };

    const calculateLateFee = (returnDate, expireDate) => {
        if (returnDate && expireDate) {
            const returnDateObj = new Date(returnDate);
            const expireDateObj = new Date(expireDate);

            if (returnDateObj > expireDateObj) {
                const diffTime = Math.abs(returnDateObj - expireDateObj);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const lateFeeAmount = diffDays * 50;
                setLateFee(lateFeeAmount);
            } else {
                setLateFee(0);
            }
        }
    }
    return (
        <div className="py-10 px-5">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold mb-10">Return A Book</h1>
            </div>
            <form onSubmit={handleReturnBook} className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
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
                        <input type="date" name="issueDate" className="input rounded-md" />
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
                        <input type="number" name="lateFee" value={lateFee} readOnly className="input rounded-md" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Return A Book" className="btn bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white border-none outline-none rounded-md btn-block" />
                </div>
            </form>
        </div>
    );
};

export default ReturnForm;