import Footer from "./sub-components/Footer";
import MemberCollection from "./sub-components/MemberCollection";
import Navbar from "./sub-components/Navbar";

const ViewMember = () => {
    return (
        <div>
            <Navbar/>
            <MemberCollection/>
            <Footer/>
        </div>
    );
};

export default ViewMember;