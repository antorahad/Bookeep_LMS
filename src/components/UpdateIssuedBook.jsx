import Footer from "./sub-components/Footer";
import IssuedBookUpdateForm from "./sub-components/IssuedBookUpdateForm";
import Navbar from "./sub-components/Navbar";

const UpdateIssuedBook = () => {
    return (
        <div>
            <Navbar/>
            <IssuedBookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateIssuedBook;