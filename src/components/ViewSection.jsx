import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import SectionCollection from "./sub-components/SectionCollection";

const ViewSection = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Section List</title>
             </Helmet>
            <Navbar/>
            <SectionCollection/>
            <Footer/>
        </div>
    );
};

export default ViewSection;