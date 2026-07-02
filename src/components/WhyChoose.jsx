import {
    FaShieldAlt,
    FaChartLine,
    FaClock,
    FaHeadset
}
    from "react-icons/fa";

function WhyChoose(){

    return(

        <section className="why-section">

            <h2>Why Choose Sindora?</h2>

            <div className="why-grid">

                <div className="why-card">

                    <FaShieldAlt className="why-icon"/>

                    <h3>HIPAA Secure</h3>

                    <p>

                        Complete patient data protection with secure workflow.

                    </p>

                </div>

                <div className="why-card">

                    <FaChartLine className="why-icon"/>

                    <h3>99% Accuracy</h3>

                    <p>

                        Quality focused billing process.

                    </p>

                </div>

                <div className="why-card">

                    <FaClock className="why-icon"/>

                    <h3>24/7 Support</h3>

                    <p>

                        Dedicated client success team.

                    </p>

                </div>

                <div className="why-card">

                    <FaHeadset className="why-icon"/>

                    <h3>Expert Team</h3>

                    <p>

                        Certified medical billing professionals.

                    </p>

                </div>

            </div>

        </section>

    );

}

export default WhyChoose;