import BookUpdateForm from "./sub-components/BookUpdateForm";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const UpdateBook = () => {
    return (
        <div>
            <Navbar/>
            <BookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateBook;