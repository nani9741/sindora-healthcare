import { useState } from "react";
import emailjs from "@emailjs/browser";
import groupDoctors from "../assets/images/group doctors.png";
function Contact() {

    const [showForm, setShowForm] = useState(false);

    const [consultation, setConsultation] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

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

            alert("Consultation Request Sent Successfully.");

            setConsultation({
                name:"",
                email:"",
                phone:"",
                message:""
            });

            setShowForm(false);

        }

        catch(error){

            console.log(error);

            alert("Unable to send consultation request.");

        }

    };

    return(

        <section id="contact" className="contact-section">

            <div className="contact-title">

                <span>CONTACT US</span>

                <h2>Let's Grow Your Practice Together</h2>

                <p>

                    We help Healthcare Providers improve Revenue Cycle
                    Management through Medical Billing, AR Calling,
                    Medical Coding and Payment Posting.

                </p>

            </div>

            <div className="contact-wrapper">

                <div className="contact-info">

                    <div className="contact-grid">
                        <div className="contact-left">

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Phone</h3>
                            <p>+91 8328499484</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>info@sindorahealthcare.com</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Address</h3>
                            <p>Tirupati, Andhra Pradesh, India</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🕒</div>
                            <h3>Business Hours</h3>
                            <p>Monday - Friday</p>
                            <p>9:00 AM - 6:00 PM</p>
                        </div>

                    </div>
                    </div>

                </div>
                <div className="contact-right">

                    <img
                        src={groupDoctors}
                        alt="Healthcare Team"
                    />
                    <button
                        className="consult-btn"
                        onClick={() => setShowForm(true)}
                    >
                        Schedule Free Consultation →
                    </button>


                </div>

            </div>

            {

                showForm &&

                <div className="popup-overlay">

                    <div className="popup-form">

                        <button
                            className="close-btn"
                            onClick={()=>setShowForm(false)}
                        >

                            ✕

                        </button>

                        <h2>Free Consultation</h2>

                        <form onSubmit={handleSubmit}>

                            <input

                                type="text"

                                placeholder="Full Name"

                                required

                                value={consultation.name}

                                onChange={(e)=>setConsultation({...consultation,name:e.target.value})}

                            />

                            <input

                                type="email"

                                placeholder="Email Address"

                                required

                                value={consultation.email}

                                onChange={(e)=>setConsultation({...consultation,email:e.target.value})}

                            />

                            <input

                                type="text"

                                placeholder="Phone Number"

                                required

                                value={consultation.phone}

                                onChange={(e)=>setConsultation({...consultation,phone:e.target.value})}

                            />

                            <textarea

                                rows="6"

                                placeholder="Tell us about your requirements..."

                                required

                                value={consultation.message}

                                onChange={(e)=>setConsultation({...consultation,message:e.target.value})}

                            />

                            <button
                                type="submit"
                                className="consult-btn"
                            >

                                Submit

                            </button>

                        </form>

                    </div>

                </div>

            }

        </section>

    );

}

export default Contact;