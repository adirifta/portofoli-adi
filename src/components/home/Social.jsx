import React from "react";

const Social = ({ aboutData }) => {
    return (
        <div className="home_social">
            <a href={aboutData.instagram_url} className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-instagram"></i>
            </a>

            <a href={aboutData.linkedin_url} className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href={aboutData.github_url} className="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social