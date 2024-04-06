import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ReturnForm from "./sub-components/ReturnForm";

const ReturnBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Returned Book</title>
             </Helmet>
            <Navbar/>
            <ReturnForm/>
            <Footer/>
        </div>
    );
};

export default ReturnBook;