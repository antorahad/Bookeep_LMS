import Footer from "./sub-components/Footer";
import IssuedBookCollection from "./sub-components/IssuedBookCollection";
import Navbar from "./sub-components/Navbar";

const ViewIssuedBook = () => {
    return (
        <div>
            <Navbar/>
            <IssuedBookCollection/>
            <Footer/>
        </div>
    );
};

export default ViewIssuedBook;