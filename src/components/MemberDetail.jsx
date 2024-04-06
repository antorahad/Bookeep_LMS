import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import MemberInfo from "./sub-components/MemberInfo";
import Navbar from "./sub-components/Navbar";

const MemberDetail = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Member Details</title>
             </Helmet>
            <Navbar/>
            <MemberInfo/>
            <Footer/>
        </div>
    );
};

export default MemberDetail;