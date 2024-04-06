import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import IssuedForm from "./sub-components/IssuedForm";
import Navbar from "./sub-components/Navbar";
const IssuedBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Issued Book</title>
             </Helmet>
            <Navbar/>
            <IssuedForm/>
            <Footer/>
        </div>
    );
};

export default IssuedBook;