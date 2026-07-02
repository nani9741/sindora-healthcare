import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import "./HomePageNew.css";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import TrustedLogos from "../components/TrustedLogos.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/Contact.jsx";
import Workflow from "../components/Workflow.jsx";

function HomePageNew() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustedLogos />
            <About />
            <Services />
            <Workflow/>
            <Contact />
            <Footer />
        </>
    );
}

export default HomePageNew;