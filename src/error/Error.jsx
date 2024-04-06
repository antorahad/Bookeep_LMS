import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen px-5 flex flex-col items-center justify-center gap-5 bg">
            <Helmet>
                <title>404 Page Not Found</title>
             </Helmet>
            <h1 className="text-green-400 text-5xl font-bold">Opps!</h1>
            <p className="text-white text-4xl font-bold"><span className="text-red-600">404</span> Page Not Found</p>
            <Link to={'/home'}>
                <p className="text-white font-medium hover:text-green-500 transition delay-100 duration-300 ease-in-out">Return To Home</p>
            </Link>
        </div>
    );
};

export default Error;