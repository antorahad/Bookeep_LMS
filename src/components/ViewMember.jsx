import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import MemberCollection from "./sub-components/MemberCollection";
import Navbar from "./sub-components/Navbar";

const ViewMember = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Member List</title>
             </Helmet>
            <Navbar/>
            <MemberCollection/>
            <Footer/>
        </div>
    );
};

export default ViewMember;