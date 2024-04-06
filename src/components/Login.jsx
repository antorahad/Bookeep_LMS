import { Helmet } from "react-helmet-async";
import Form from "./sub-components/Form";

const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-5">
            <Helmet>
                <title>Bookeep - Login</title>
             </Helmet>
            <Form/>
        </div>
    );
};

export default Login;