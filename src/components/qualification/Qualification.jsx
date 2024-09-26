import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personel journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                    </div>
                </div>
                {/* Education */}
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Mobile Android</h3>
                                <span className="qualification_subtitle">Semarang State Polytechnic - Institute</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                           

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Web Development</h3>
                                <span className="qualification_subtitle">Semarang State Polytechnic - Institute</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Game</h3>
                                <span className="qualification_subtitle">Semarang State Polytechnic - Institute</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">MySQL Databse</h3>
                                <span className="qualification_subtitle">Semarang State Polytechnic - Institute</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">IT APP Developer</h3>
                                <span className="qualification_subtitle">DB Klik - Raya Tenggilis Mejoyo No.AA-3 Kali Rungkut Kec Rungkut Surabaya Jawa Timur</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 17 Sept 2024 - Finished
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Independent Study of Mobile Android Developer & UI/UX</h3>
                                <span className="qualification_subtitle">Infinite Learning Indonesia - Batam, Kepulauan Riau, Indonesia</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 16 Feb 2024 - 28 Jun 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Android Developer</h3>
                                <span className="qualification_subtitle">IDCamp - Indosat Ooredoo Hutchison Digital Camp</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> August 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Junior Mobile Programmer</h3>
                                <span className="qualification_subtitle">Digital Talent Scholarship - Kominfo</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> June 2023
                                </div>
                                
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Junior Graphic Designer</h3>
                                <span className="qualification_subtitle">Digital Talent Scholarship - Kominfo</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> November 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification