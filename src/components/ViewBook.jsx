import { Helmet } from "react-helmet-async";
import BookCollection from "./sub-components/BookCollection";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const ViewBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Book List</title>
             </Helmet>
            <Navbar/>
            <BookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewBook;