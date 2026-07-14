import logo from "../assets/logos/Sindora Final Logo (1).png";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Left */}

                <div className="footer-about">

                    <img
                        src={logo}
                        alt="Sindora Healthcare Services"
                        className="footer-brand-logo"
                    />

                    <p className="footer-description">

                        Sindora Healthcare provides end-to-end Medical Billing,
                        AR Calling, Medical Coding, Eligibility Verification,
                        Charge Entry, Payment Posting and Revenue Cycle
                        Management services for Healthcare Providers
                        across the United States.

                    </p>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h4>Quick Links</h4>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#workflow">Workflow</a>
                    <a href="#contact">Contact</a>

                </div>

                {/* Services */}

                <div className="footer-links">

                    <h4>Our Services</h4>

                    <a href="#services">Medical Billing</a>
                    <a href="#services">AR Calling</a>
                    <a href="#services">Medical Coding</a>
                    <a href="#services">Eligibility Verification</a>
                    <a href="#services">Charge Entry</a>
                    <a href="#services">Payment Posting</a>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h4>Contact</h4>

                    <div className="footer-contact-item">
                        <span>📞</span>
                        <p>+91 08577-293718</p>
                    </div>

                    <div className="footer-contact-item">
                        <span>✉️</span>
                        <p>info@sindorahealthcare.com</p>
                    </div>

                    <div className="footer-contact-item">
                        <span>📍</span>
                        <p>Tirupati, Andhra Pradesh, India</p>
                    </div>

                    <div className="footer-contact-item">
                        <span>🕒</span>
                        <p>Mon - Fri | 9:00 AM - 6:00 PM</p>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © 2026
                    <strong> Sindora Healthcare Services </strong>

                    | All Rights Reserved.

                </p>

                <p className="footer-tagline">

                    CARE • COMMITMENT • CONFIDENCE

                </p>

            </div>

        </footer>

    );

}

export default Footer;