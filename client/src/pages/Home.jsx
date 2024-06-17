import "bootstrap/dist/css/bootstrap.min.css";

import CustomNavbar from "../components/CustomNavbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Exp from "../components/Exp";
import TechStack from "../components/TechStack";

const Home = () => {
    return ( 
        <>
            <CustomNavbar />
            <Hero />
            <AboutMe />
            <Exp />
            <TechStack />
        </>
     );
}
 
export default Home;