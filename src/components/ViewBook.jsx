import BookCollection from "./sub-components/BookCollection";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";

const ViewBook = () => {
    return (
        <div>
            <Navbar/>
            <BookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewBook;