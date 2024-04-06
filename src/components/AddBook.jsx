import { Helmet } from "react-helmet-async";
import BookForm from "./sub-components/BookForm";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const AddBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Add Bok</title>
             </Helmet>
            <Navbar/>
            <BookForm/>
            <Footer/>
        </div>
    );
};

export default AddBook;