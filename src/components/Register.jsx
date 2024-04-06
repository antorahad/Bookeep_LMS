import { Helmet } from "react-helmet-async";
import Rform from "./sub-components/Rform";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-5">
            <Helmet>
                <title>Bookeep - Register</title>
             </Helmet>
            <Rform/>
        </div>
    );
};

export default Register;