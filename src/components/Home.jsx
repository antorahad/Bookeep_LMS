import Navbar from "./sub-components/Navbar";
import HomeCard from "./sub-components/HomeCard";
import Footer from "./sub-components/Footer";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bookeep - Home</title>
             </Helmet>
            <Navbar />
            <HomeCard/>
            <Footer/>
        </div>
    );
};

export default Home;