import { Helmet } from "react-helmet-async";
import BookInfo from "./sub-components/BookInfo";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const BookDetail = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Book Details</title>
             </Helmet>
            <Navbar/>
            <BookInfo/>
            <Footer/>
        </div>
    );
};

export default BookDetail;