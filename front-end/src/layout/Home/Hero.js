import img1 from "../../assets/landing_page/Landing_Page_image_1.png";

import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <section className="hero" id="hero">
      <div className="hero-section">
        <div className="info">
          <h1>EMPOWER YOUR TEAM</h1>
          <h2>Create a culture of mental wealth together</h2>
          <button onClick={() => navigateTo("/register/create")}> JOIN US TODAY</button>
          <img
            src={img1}
            alt="centered placeholder"
            className="centered-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
