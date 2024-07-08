import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Adi Rifta</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portofolio" className="footer_link">Projects</a>
                    </li>

                    {/* <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li> */}
                </ul>

                <div className="footer_social">
                <a href="https://www.facebook.com/adi.rdk.9/" className="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/adirifta" className="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://twitter.com/Adirdk" className="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-twitter"></i>
            </a>
                </div>

                <span className="footer_copy">&#169; Adirifta. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer