import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import MemberForm from "./sub-components/MemberForm";
import Navbar from "./sub-components/Navbar";

const AddMember = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Add Member</title>
             </Helmet>
            <Navbar/>
            <MemberForm/>
            <Footer/>
        </div>
    );
};

export default AddMember;