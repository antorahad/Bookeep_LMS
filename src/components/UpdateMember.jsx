import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import MemberUpdateForm from "./sub-components/MemberUpdateForm";
import Navbar from "./sub-components/Navbar";

const UpdateMember = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Update Member</title>
             </Helmet>
            <Navbar/>
            <MemberUpdateForm/>
            <Footer/>
        </div>
    );
};

export default UpdateMember;