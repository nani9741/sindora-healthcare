import ecw from "../assets/logos/ecw.png";
import epic from "../assets/logos/Epic-Logo1.png";
import kareo from "../assets/logos/Kareo.png";
import advanced from "../assets/logos/advancedmd.png";
import athena from "../assets/logos/Athenahealth_Logo.png";
import nextgen from "../assets/logos/NG_Logo_1024x768.png";

const logos = [
    nextgen,
    ecw,
    epic,
    kareo,
    advanced,
    athena,

    // Duplicate for seamless loop
    nextgen,
    ecw,
    epic,
    kareo,
    advanced,
    athena
];

function TrustedLogos() {
    return (
        <section className="trusted-section">

            <h2>
                WE WORK WITH LEADING HEALTHCARE SOFTWARE
            </h2>

            <div className="logo-slider">

                <div className="logo-track">

                    {logos.map((logo,index)=>(
                        <div className="logo-item" key={index}>
                            <img src={logo} alt="" />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default TrustedLogos;