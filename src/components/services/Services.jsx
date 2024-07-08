import React, {useState} from "react";
import "./services.css"

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">
            <div className="services_content">
                    <div>
                        <i className="uil  uil-mobile-android-alt services_icon"></i>
                        <h3 className="services_title">
                            Mobile <br /> Development
                        </h3> 
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More 
                        <i className="uil uil-arrow-right services_button-icon"></i>
                        </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                            <div className="services_modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                                <h3 className="services_modal-title">Mobile Development</h3>
                                <p className="services_modal-description">Experience 2 year</p>

                                <ul className="services_modal-services grid">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Expertise in kotlin native and jetpack compose.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">I develop the user interface (UI) & user experience (UX).</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Develop applications to meet user needs.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Backend Development for Mobile Applications.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Preparing the app for launch on Play Store & App Store.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Web <br /> Development
                        </h3> 
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>View More 
                        <i className="uil uil-arrow-right services_button-icon"></i>
                        </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                            <div className="services_modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                                <h3 className="services_modal-title">Web Development</h3>
                                <p className="services_modal-description">Experience 2 year</p>

                                <ul className="services_modal-services grid">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Using familiar programming languages ​​& frameworks.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Attractive and responsive user interface design.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Handle development both front-end and back-end.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Develop complex & interactive web-based applications.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Complex web with interactive features & API integration.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>


                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            Visual <br /> Designer
                        </h3> 
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>View More 
                        <i className="uil uil-arrow-right services_button-icon"></i>
                        </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                            <div className="services_modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                                <h3 className="services_modal-title">Visual Designer</h3>
                                <p className="services_modal-description">Experience 2 year</p>

                                <ul className="services_modal-services grid">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Creating designs for various print and digital needs.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Using tools like Figma, Canva, & photoshop/premiere.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Analyze design needs and client preferences.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Excellent product design and promotion skills.</p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">Product design and mockup services.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Services