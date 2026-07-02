
import {
    FaUserPlus,
    FaSearch,
    FaFileMedical,
    FaPaperPlane,
    FaMoneyCheckAlt,
    FaPhoneAlt
} from "react-icons/fa";

const workflow = [
    {
        icon:<FaUserPlus/>,
        title:"Patient Registration",
        desc:"Collect patient demographics & insurance information."
    },
    {
        icon:<FaSearch/>,
        title:"Eligibility Verification",
        desc:"Verify insurance eligibility before appointments."
    },
    {
        icon:<FaFileMedical/>,
        title:"Medical Coding",
        desc:"Accurate ICD-10, CPT & HCPCS coding."
    },
    {
        icon:<FaPaperPlane/>,
        title:"Claim Submission",
        desc:"Electronic clean claim submission."
    },
    {
        icon:<FaMoneyCheckAlt/>,
        title:"Payment Posting",
        desc:"ERA / EOB reconciliation."
    },
    {
        icon:<FaPhoneAlt/>,
        title:"AR Follow-up",
        desc:"Insurance follow-up for reimbursements."
    }
];

export default function Workflow(){

    return(

        <section className="workflow-section" id="workflow">

            <p className="workflow-small">
                Healthcare Revenue Cycle Process
            </p>

            <h2 className="workflow-title">

                Our Workflow

            </h2>

            <div className="workflow-slider">

                <div className="workflow-track">

                    {[...workflow,...workflow].map((item,index)=>(

                        <div className="workflow-item" key={index}>

                            <div className="workflow-card">

                                <div className="workflow-icon">

                                    {item.icon}

                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                            <div className="ecg">

                                <svg viewBox="0 0 300 90">

                                    <path d="M0 45
L40 45
L60 45
L75 20
L90 70
L110 30
L130 45
L300 45"/>

                                </svg>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}