import img from "../../assets/landing_page/Landing_Page_image_2.png";

function Stress() {
  return (
    <section className="hero" id="stress">
      {/* <div className="stack">
        <div className="box">
          <h2>WE ARE EXPERIENCING AN UNPRECEDENTED AMOUNT OF STRESS</h2>
          <div className="placeholder-box"></div>
        </div>
        <div className="box">
          <div className="placeholder-box"></div>
          <h2>
            STRESS CAN LEAD TO A LACK OF MORALE, RESILIENCE, AND PRODUCTIVITY
          </h2>
        </div>
        <div className="box">
          <h2>[INSERT % STATISTIC ABOUT EMPLOYEE WELLNESS]</h2>
          <div className="placeholder-box"></div>
        </div>
      </div> */}

      <div className="left-side">
        <img src={img} alt="woman sitting" className="stress-img" />
      </div>
      <div className="right-side stack">
        <div className="box">
          <div className="box-r">
            <div className="bubble-card">
              <h3>We are experienceing an unprecedented amount of stress</h3>
            </div>
          </div>
          <div className="box-l"></div>
        </div>

        <div className="box">
          <div className="box-l"></div>
          <div className="box-r">
            <div className="bubble-card">
              <h3>Stress can lead to a lack of morale, resilience, and productivity</h3>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-r">
            <div className="bubble-card">
              <h3>[Insert % statistic about employee wellness]</h3>
            </div>
          </div>
          <div className="box-l"></div>
        </div>
      </div>
    </section>
  );
}

export default Stress;
