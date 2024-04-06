import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ReturnBookUpdateForm from "./sub-components/ReturnBookUpdateForm";

const UpdateReturnedBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Update Returned Book</title>
             </Helmet>
            <Navbar/>
            <ReturnBookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateReturnedBook;