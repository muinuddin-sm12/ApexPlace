import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Estates from "../components/Estates";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ApexPlace | Home</title>
            </Helmet>
            <Banner/>
            <Estates/>
        </div>
    );
};

export default Home;