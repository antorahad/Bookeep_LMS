import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import IssuedBookCollection from "./sub-components/IssuedBookCollection";
import Navbar from "./sub-components/Navbar";

const ViewIssuedBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Issued Book List</title>
             </Helmet>
            <Navbar/>
            <IssuedBookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewIssuedBook;