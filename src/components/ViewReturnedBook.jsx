import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ReturnedBookCollection from "./sub-components/ReturnedBookCollection";

const ViewReturnedBook = () => {
    return (
        <div>
            <Navbar/>
            <ReturnedBookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewReturnedBook;