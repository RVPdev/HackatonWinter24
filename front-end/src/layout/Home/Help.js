import img_one from "../../assets/landing_page/Landing_Page_image_3.png";
import img_two from "../../assets/landing_page/Landing_Page_image_4.png";
import img_three from "../../assets/landing_page/Landing_page_image_5.png";

function Help() {
  return (
    <section className="hero stack" id="help">
      <div className="help-title">
        <h2>WE CAN HELP</h2>
      </div>
      <div className="mood-banner">
        <div className="sgt-bnr">
          <img src={img_one} alt="girl sitting" className="img-one" />
          <p>MOOD TRACKING</p>
        </div>

        <div className="sgt-bnr">
          <img src={img_two} alt="man levitating" className="img-two" />
          <p>STRESS MANAGEMENT</p>
        </div>

        <div className="sgt-bnr">
          <img src={img_three} alt="man with light bulb" className="img-three" />
          <p>PERSONALIZED TIPS</p>
        </div>
      </div>
    </section>
  );
}

export default Help;
