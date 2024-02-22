import img from "../../assets/landing_page/Landing_Page_image_2.png";

function Stress() {
  return (
    <section className="hero" id="stress">
      <div className="left-side">
        <img src={img} alt="woman sitting" className="stress-img" />
      </div>
      <div className="right-side stack">
        <div className="box">
          <div className="box-r">
            <div className="bubble-card">
              <h3>We are experiencing an unprecedented amount of stress</h3>
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
              <h3>83% of US workers suffer from work-related stress</h3>
            </div>
          </div>
          <div className="box-l"></div>
        </div>
      </div>
    </section>
  );
}

export default Stress;
