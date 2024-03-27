import { Link } from "react-router-dom";

const Rform = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-white bg-opacity-10 p-5 rounded-md w-full md:w-1/2 lg:w-1/3">
            <form className="flex flex-col items-center justify-center gap-3 w-full">
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
                <button className="btn btn-block px-6 py-3 bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white hover:text-white focus:text-white text-sm rounded-md border-none outline-none transition delay-100 duration-300 ease-in-out">Login</button>
            </form>
            <p className="text-sm text-slate-50 font-medium">Have an account? <Link to={'/'} className="text-green-400">Login</Link></p>
        </div>
    );
};

export default Rform;