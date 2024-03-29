import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";

const Rform = () => {
    const {register} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name);
        register(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: "Congratulation",
                text: "Your account has been created",
                icon: "success"
            });
            navigate(location?.state ? location.state : '/');
        }).catch(error => {
            Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error"
            });
        })
    }
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-white bg-opacity-10 p-5 rounded-md w-full md:w-1/2 lg:w-1/3">
            <form onSubmit={handleRegister} className="flex flex-col items-center justify-center gap-3 w-full">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="font-medium text-green-400">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered rounded-md" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="font-medium text-green-400">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered rounded-md" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="font-medium text-green-400">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Your Password" name="password" className="input input-bordered rounded-md" />
                </div>
                <input type="submit" value="Register" className="btn btn-block px-6 py-3 bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white hover:text-white focus:text-white text-sm rounded-md border-none outline-none transition delay-100 duration-300 ease-in-out"/>
            </form>
            <p className="text-sm text-slate-50 font-medium">Have an account? <Link to={'/'} className="text-green-400">Login</Link></p>
        </div>
    );
};

export default Rform;