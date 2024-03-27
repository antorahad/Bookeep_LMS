import BookForm from "./sub-components/BookForm";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const AddBook = () => {
    return (
        <div>
            <Navbar/>
            <BookForm/>
            <Footer/>
        </div>
    );
};

export default AddBook;