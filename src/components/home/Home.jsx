import React, { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { aboutAPI } from "../../services/api";

const Home = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchAboutData = async () => {
        try {
          const response = await aboutAPI.getAbout();
          setAboutData(response.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to load about information");
          setLoading(false);
          console.error("Error fetching about data:", err);
        }
      };
  
      fetchAboutData();
    }, []);
  
    if (loading) return <div className="about_container container grid">Loading...</div>;
    if (error) return <div className="about_container container grid">{error}</div>;

    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social aboutData={aboutData} />

                    <div className="home_img"></div>

                    <Data aboutData={aboutData}/>
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home