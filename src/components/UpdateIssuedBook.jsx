import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import IssuedBookUpdateForm from "./sub-components/IssuedBookUpdateForm";
import Navbar from "./sub-components/Navbar";

const UpdateIssuedBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Update Issued Book</title>
             </Helmet>
            <Navbar/>
            <IssuedBookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateIssuedBook;