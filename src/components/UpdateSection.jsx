import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import SectionUpdateForm from "./sub-components/SectionUpdateForm";

const UpdateSection = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Update Section</title>
             </Helmet>
            <Navbar/>
            <SectionUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateSection;