import {
    FaPhoneVolume,
    FaFileMedical,
    FaMoneyCheckAlt,
    FaClipboardCheck,
    FaFileInvoiceDollar,
    FaExclamationTriangle
} from "react-icons/fa";

function Services() {

    const services = [

        {
            icon:<FaPhoneVolume/>,
            title:"AR Calling",
            desc:"Complete insurance follow-up to maximize reimbursements and reduce outstanding balances."
        },

        {
            icon:<FaFileMedical/>,
            title:"Medical Coding",
            desc:"Accurate ICD-10, CPT and HCPCS coding by experienced certified coders."
        },

        {
            icon:<FaMoneyCheckAlt/>,
            title:"Payment Posting",
            desc:"Fast ERA/EOB posting with accurate reconciliation and payment tracking."
        },

        {
            icon:<FaClipboardCheck/>,
            title:"Eligibility Verification",
            desc:"Real-time patient eligibility verification before appointments and procedures."
        },

        {
            icon:<FaFileInvoiceDollar/>,
            title:"Charge Entry",
            desc:"Accurate claim creation ensuring faster reimbursements with fewer rejections."
        },

        {
            icon:<FaExclamationTriangle/>,
            title:"Denial Management",
            desc:"Root cause analysis and appeal processing to recover lost revenue efficiently."
        }

    ];

    return(

        <section className="services-section" id="services">

            <div className="services-header">

                <span>OUR SERVICES</span>

                <h2>Revenue Cycle Management Solutions</h2>

                <p>
                    End-to-end medical billing services designed to improve cash flow,
                    reduce denials and maximize reimbursements.
                </p>

            </div>

            <div className="services-grid">

                {

                    services.map((service,index)=>(

                        <div
                            className="service-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index*100}
                        >

                            <div className="service-icon">

                                {service.icon}

                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.desc}</p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Services;