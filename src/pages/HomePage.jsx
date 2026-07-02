import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileMedical, FaUserMd, FaHospital, FaNotesMedical } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { useState} from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import athena from "../assets/logos/Athenahealth_Logo.png";
import epic from "../assets/logos/Epic-Logo1.png";
import ecw from "../assets/logos/ecw.png";
import nextgen from "../assets/logos/NG_Logo_1024x768.png";
import kareo from "../assets/logos/Kareo.png";
import advancedmd from "../assets/logos/advancedmd.png";
import medisoft from "../assets/logos/Medisoft.png";
import centricity from "../assets/logos/ge-centricity-logo.png";
import logo from "../assets/logos/Sindora Final Logo.png";

function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [consultation, setConsultation] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const handleSubmit = async () => {
        try {

            await emailjs.send(
                "service_l1l9opq",
                "template_8rtbgd1",
                {
                    name: consultation.name,
                    email: consultation.email,
                    phone: consultation.phone,
                    message: consultation.message
                },
                "ZP0tjrw1wXIwZyse-"
            );

            alert("Consultation Request Sent Successfully");

            setShowForm(false);

            setConsultation({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

        } catch (error) {
            console.log(error);
            alert("Failed to send email");
        }
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-custom">

                <div className="container">

                    <a className="navbar-brand fw-bold d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Sindora Healthcare"
                            style={{
                                height: "50px",
                                marginRight: "10px"
                            }}
                        />

                        <span>SINDORA HEALTHCARE</span>
                    </a>

                    <div className="ms-auto">

                        <a href="#about" className="nav-link-custom">
                            About
                        </a>

                        <a href="#services" className="nav-link-custom">
                            Services
                        </a>

                        <a href="#contact" className="nav-link-custom">
                            Contact
                        </a>

                    </div>

                </div>

            </nav>
            <div className="hero-section">

                <div className="overlay" data-aos="fade-right">

                    <h1>SINDORA HEALTHCARE</h1>

                    <p>
                        Transforming Healthcare Revenue Cycle Management
                    </p>

                    <button
                        className="btn btn-light btn-lg"
                        onClick={() =>
                            document.getElementById("services")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Explore Services
                    </button>

                </div>
                <div className="container py-5">

                    <div className="row align-items-center">

                        <div className="col-md-6">


                        </div>

                    </div>

                </div>

            </div>
            <div className="row text-center">

                <div className="col-md-3 stats-box">
                    <h2>100+</h2>
                    <p>Clients</p>
                </div>

                <div className="col-md-3 stats-box">
                    <h2>500+</h2>
                    <p>Employees</p>
                </div>

                <div className="col-md-3 stats-box">
                    <h2>98%</h2>
                    <p>Client Satisfaction</p>
                </div>

                <div className="col-md-3 stats-box">
                    <h2>24/7</h2>
                    <p>Support</p>
                </div>

            </div>
            <div id="about" className="container py-5">

                <h2>About Sindora Healthcare</h2>



                <p>
                    At Sindora Healthcare, we specialize in Medical Billing,
                    AR Calling, Medical Coding, Payment Posting, and Revenue
                    Cycle Management services. Our mission is to help healthcare
                    providers improve revenue, reduce claim denials, and deliver
                    exceptional patient care through efficient healthcare operations.
                </p>

            </div>
            <div className="container py-5">

                <h2 className="section-title text-center">
                    Why Choose Sindora?
                </h2>

                <div className="row mt-5">

                    <div className="col-md-3 mb-3" data-aos="zoom-in">
                        <div className="card p-4 text-center service-card">
                            <h4>24/7 Support</h4>
                            <p>Dedicated support for all client needs.</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3" data-aos="zoom-in">
                        <div className="card p-4 text-center service-card">
                            <h4>HIPAA Compliant</h4>
                            <p>Secure and compliant healthcare processes.</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3" data-aos="zoom-in">
                        <div className="card p-4 text-center service-card">
                            <h4>99% Accuracy</h4>
                            <p>High-quality billing and coding services.</p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3" data-aos="zoom-in">
                        <div className="card p-4 text-center service-card">
                            <h4>Cost Effective</h4>
                            <p>Reduce operational costs significantly.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div id="services" className="container mt-5">
                <h2 className="section-title">Our Services</h2>

                <div className="row">

                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaUserMd /> AR Calling
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaMoneyCheckAlt /> Payment Posting
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaFileMedical /> Medical Coding
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaClipboardList /> Charge Entry
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaNotesMedical /> Denial Management
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3" data-aos="fade-up">
                        <div className="card service-card">
                            <div className="card-body">
                                <h5>
                                    <FaHospital /> Eligibility Verification
                                </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mt-5">
                <h2 className="section-title">Achievements</h2>

                <div className="row">

                    <div className="col-md-3" data-aos="fade-right">
                        <div className="achievement-box">
                            <h2>100+</h2>
                            <p>Clients</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="fade-right">
                        <div className="achievement-box">
                            <h2>500+</h2>
                            <p>Employees</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="fade-right">
                        <div className="achievement-box">
                            <h2>98%</h2>
                            <p>Satisfaction</p>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="fade-right">
                        <div className="achievement-box">
                            <h2>10+</h2>
                            <p>Years</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container py-5">

                <h2 className="section-title text-center">
                    Our Process
                </h2>

                <div className="row text-center mt-5">

                    <div className="col-md-3" data-aos="flip-up">
                        <div className="card p-4 service-card">
                            <h4>1</h4>
                            <h5>Patient Registration</h5>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="flip-up">
                        <div className="card p-4 service-card">
                            <h4>2</h4>
                            <h5>Medical Coding</h5>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="flip-up">
                        <div className="card p-4 service-card">
                            <h4>3</h4>
                            <h5>Claim Submission</h5>
                        </div>
                    </div>

                    <div className="col-md-3" data-aos="flip-up">
                        <div className="card p-4 service-card">
                            <h4>4</h4>
                            <h5>Payment Collection</h5>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container py-5">

                <h2 className="section-title text-center">
                    What Our Clients Say
                </h2>

                <div className="row mt-5">

                    <div className="col-md-4" data-aos="flip-left">
                        <div className="card p-4 service-card">
                            <p>
                                Excellent billing services and quick claim processing.
                            </p>
                            <h5>Healthcare Client</h5>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="flip-left">
                        <div className="card p-4 service-card">
                            <p>
                                Reduced our claim denials significantly.
                            </p>
                            <h5>Hospital Partner</h5>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="flip-left">
                        <div className="card p-4 service-card">
                            <p>
                                Professional team and outstanding support.
                            </p>
                            <h5>Medical Group</h5>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container py-5 text-center">

                <h2>Trusted By</h2>

                <div className="row mt-4">

                    <div className="col-md-3" data-aos="zoom-in-up">
                        <h4>Hospital A</h4>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in-up">
                        <h4>Medical Group B</h4>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in-up">
                        <h4>Clinic C</h4>
                    </div>

                    <div className="col-md-3" data-aos="zoom-in-up">
                        <h4>Healthcare D</h4>
                    </div>

                </div>

            </div>
            <div className="container py-5 text-center">

                <h2 className="mb-4">Software Expertise</h2>

                <div className="logo-slider">
                    <div className="logo-track">

                        <img src={athena} alt="Athena" />
                        <img src={epic} alt="Epic" />
                        <img src={ecw} alt="eCW" />
                        <img src={nextgen} alt="NextGen" />
                        <img src={kareo} alt="Kareo" />
                        <img src={advancedmd} alt="AdvancedMD" />
                        <img src={medisoft} alt="Medisoft" />
                        <img src={centricity} alt="Centricity" />

                        {/* Duplicate for smooth loop */}

                        <img src={athena} alt="Athena" />
                        <img src={epic} alt="Epic" />
                        <img src={ecw} alt="eCW" />
                        <img src={nextgen} alt="NextGen" />
                        <img src={kareo} alt="Kareo" />
                        <img src={advancedmd} alt="AdvancedMD" />
                        <img src={medisoft} alt="Medisoft" />
                        <img src={centricity} alt="Centricity" />

                    </div>
                </div>

            </div>
            <div id="contact" className="container py-5 text-center">

                <h2>Contact Us</h2>

                <p>📧 info@sindorahealthcare.com</p>
                <p>📞 +91 8328499484</p>
                <p>📍 Tirupati, Andhra Pradesh, India</p>

                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => setShowForm(true)}
                >
                    Schedule Consultation
                </button>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.756382088835!2d79.77936697505498!3d13.240599508923689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5299bd501826e3%3A0xd4eacd413822ab4c!2sNANI%20ENAGALURU!5e0!3m2!1sen!2sin!4v1781947037005!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            {showForm && (
                <div className="popup-overlay">

                    <div className="popup-form">


                        <h3>Schedule Consultation</h3>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Full Name"
                            value={consultation.name}
                            onChange={(e) =>
                                setConsultation({
                                    ...consultation,
                                    name: e.target.value
                                })
                            }
                        />

                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            value={consultation.email}
                            onChange={(e) =>
                                setConsultation({
                                    ...consultation,
                                    email: e.target.value
                                })
                            }
                        />

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Phone Number"
                            value={consultation.phone}
                            onChange={(e) =>
                                setConsultation({
                                    ...consultation,
                                    phone: e.target.value
                                })
                            }
                        />

                        <textarea
                            className="form-control mb-3"
                            rows="4"
                            placeholder="Message"
                            value={consultation.message}
                            onChange={(e) =>
                                setConsultation({
                                    ...consultation,
                                    message: e.target.value
                                })
                            }
                        ></textarea>

                        <button
                            className="btn btn-success me-2"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={() => setShowForm(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}
            <footer className="footer">
                <h5>Sindora Healthcare</h5>
                <p>Medical Billing | AR Calling | Medical Coding</p>
                <p>© 2026 Sindora Healthcare. All Rights Reserved.</p>
            </footer>
            <a
                href="https://wa.me/8328499484"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
            >
                WhatsApp
            </a>
        </div>
    );
}

export default HomePage;