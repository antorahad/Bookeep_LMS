import { Helmet } from "react-helmet-async";
import Footer from "./sub-components/Footer";
import Navbar from "./sub-components/Navbar";
import ProfileCard from "./sub-components/ProfileCard";

const ViewProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - My Profile</title>
             </Helmet>
            <Navbar/>
            <ProfileCard/>
            <Footer/>
        </div>
    );
};

export default ViewProfile;