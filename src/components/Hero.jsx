import doctor from "../assets/images/hero.png";

function Hero() {
    return (
        <section className="hero">

            {/* Background Effects */}

            <div className="gradient-bg"></div>

            <div className="medical-icon m1">✚</div>
            <div className="medical-icon m2">✚</div>
            <div className="medical-icon m3">✚</div>
            <div className="medical-icon m4">✚</div>
            <div className="medical-icon m5">✚</div>
            <div className="medical-icon m6">✚</div>

            <span className="particle p1"></span>
            <span className="particle p2"></span>
            <span className="particle p3"></span>
            <span className="particle p4"></span>
            <span className="particle p5"></span>
            <span className="particle p6"></span>

            <div className="ecg-line">
                <svg
                    viewBox="0 0 1600 220"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
            M0 110
            L180 110
            L220 110
            L245 70
            L265 150
            L285 40
            L310 110
            L520 110
            L560 110
            L585 75
            L605 145
            L625 45
            L650 110
            L1600 110
            "
                    />
                </svg>
            </div>

            <div className="hero-container">

                <div className="hero-left">

          <span className="hero-tag">
    🩺 Revenue Cycle Management Experts
</span>

                    <h1>
                        Transform Your <br />
                        <span>Medical Billing</span><br />
                        With Sindora
                    </h1>

                    <p>
                        End-to-end Medical Billing, AR Calling,
                        Medical Coding, Eligibility Verification,
                        Payment Posting and Revenue Cycle Management
                        services that maximize reimbursements and
                        reduce denials.
                    </p>

                </div>

                <div className="hero-right">

                    <div className="doctor-card">
                        <img src={doctor} alt="Doctor"/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;