import BookInfo from "./sub-components/BookInfo";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const BookDetail = () => {
    return (
        <div>
            <Navbar/>
            <BookInfo/>
            <Footer/>
        </div>
    );
};

export default BookDetail;