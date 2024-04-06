import { Helmet } from "react-helmet-async";
import BookUpdateForm from "./sub-components/BookUpdateForm";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const UpdateBook = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Update Book</title>
             </Helmet>
            <Navbar/>
            <BookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateBook;