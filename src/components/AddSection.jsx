import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import SectionForm from "./sub-components/SectionForm";

const AddSection = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Add Section</title>
             </Helmet>
            <Navbar/>
            <SectionForm/>
            <Footer/>
        </div>
    );
};

export default AddSection;