import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ReturnedBookCollection from "./sub-components/ReturnedBookCollection";

const ViewReturnedBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Returned Book List</title>
             </Helmet>
            <Navbar/>
            <ReturnedBookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewReturnedBook;