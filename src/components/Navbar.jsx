import logo from "../assets/logos/Sindora Final Logo (1).png";
import sindoraTitle from "../assets/logos/Sindora Title.png";

function Navbar() {
    return (
        <header className="navbar">

            <div className="nav-container">

                <a href="#" className="logo">
                    <img src={logo} className="logo-icon" />

                    <div className="logo-content">
                        <img
                            src={sindoraTitle}
                            className="navbar-title"
                        />

                        <span className="logo-text">
            HEALTHCARE SERVICES
        </span>
                    </div>
                </a>

                <ul className="nav-links">

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#workflow">Workflow</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>

            </div>

        </header>
    );
}

export default Navbar;