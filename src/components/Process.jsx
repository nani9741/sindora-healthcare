function Process(){

    const steps=[

        "Patient Registration",

        "Eligibility Verification",

        "Medical Coding",

        "Claim Submission",

        "Payment Posting",

        "AR Follow-up"

    ];

    return(

        <section className="process-section">

            <h2>Our Workflow</h2>

            <div className="timeline">

                {

                    steps.map((step,index)=>(

                        <div
                            key={index}
                            className="timeline-card"
                        >

                            <div className="step">

                                0{index+1}

                            </div>

                            <h3>{step}</h3>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Process;