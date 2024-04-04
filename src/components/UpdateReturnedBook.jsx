import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ReturnBookUpdateForm from "./sub-components/ReturnBookUpdateForm";

const UpdateReturnedBook = () => {
    return (
        <div>
            <Navbar/>
            <ReturnBookUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateReturnedBook;