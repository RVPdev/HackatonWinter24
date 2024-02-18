import { useState, useEffect } from "react";
import "./employeepage.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import HappyIcon from "./../assets/happyicons/Happy.png";
import AngryIcon from "./../assets/happyicons/Angry.png";
import MehIcon from "./../assets/happyicons/Meh.png";
import SadIcon from "./../assets/happyicons/Sad.png";
import TiredIcon from "./../assets/happyicons/Tired.png";
import MehColored from "./../assets/happyicons/Meh_color.png";
import HappyColored from "./../assets/happyicons/Happy_color.png";
import HealthierImage from "./../assets/dashboard/healthier.png"
import MeditateImage from "./../assets/dashboard/meditate.png"
import RunImage from "./../assets/dashboard/run.png"

import { loadEmployee } from "../utils/api";

function Employee() {
  const [user, setUser] = useState(null);
  //const { employeeId } = useParams();
  const employeeId = 1;

  const navigate = useNavigate();

  console.log(`employee id employee page: ${employeeId}`);

  /* Load User via url*/
  useEffect(() => {
    /* fetch from DB using employeeId*/

    async function getUser() {
      try {
        const employee = await loadEmployee(1);
        console.log(`employee: ${JSON.stringify(employee)}`);
        setUser(employee);
      } catch (error) {
        console.log(`Error in getUser! ${JSON.stringify(error)}`);
      }
    }
    getUser();
  }, []);

  if (user) {
    return (
      <div>
        <h1 className="employee-header">Welcome {user["first_name"]}</h1>
        <div className="employee-page-wrapper">
          <div className="employee-column-1">
            <h1>How are you feeling?</h1>
            <div className="emoji-wrapper">
              <div>
                <img className="emoji" src={HappyIcon} alt="happy icon" />
                <p>Happy</p>
              </div>
              <div>
                <img className="emoji" src={SadIcon} alt="upset icon" />
                <p>Sad</p>
              </div>
              <div>
                <img className="emoji" src={AngryIcon} alt="upset icon" />
                <p>Upset</p>
              </div>
              <div>
                <img className="emoji" src={TiredIcon} alt="tired icon" />
                <p>Tired</p>
              </div>
              <div>
                <img className="emoji" src={MehIcon} alt="meh icon" />
                <p>Meh</p>
              </div>
            </div>
            <button
              className="add-entry-button"
              onClick={() =>
                navigate(`/register/mental`, {
                  replace: true,
                  state: {
                    employeeId: employeeId,
                  },
                })
              }
            >
              <img className="plus-btn-img" src={HappyIcon} alt="icon" />
              <p>ADD YOUR DAILY ENTRY</p>
            </button>
            <div className="mood-section-wrapper">
              <div className="average_mood">
                <div className="mood-image-wrapper">
                  <img src={MehColored} className="mood-image" alt="meh" />
                </div>
                <p>Average Mood</p>
              </div>
              <div className="variable_mood">
                <div className="mood-image-wrapper">
                  <img
                    src={HappyColored}
                    className="mood-image"
                    alt="variable"
                  />
                </div>
                <p>Happy</p>
              </div>
            </div>
            <div className="quote-section">
              <p>
                "Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle."
              </p>
            </div>
          </div>
          <div className="employee-column-2">
            <div className="weekly-reports-section">
              <h1>Weekly Reports</h1>
            </div>
            <div className="helpful-tips-section">
              <h1>Helpful tips</h1>
              <div className="healthy-tips-wrapper">
                <div className="healthy-tip">
                  <p>Meditate</p>
                  <div className="tip-image-wrapper">
                    <img className="tip-image" src={MeditateImage} alt="meditate" />
                  </div>
                </div>
                <div className="healthy-tip">
                  <p>Go for a run</p>
                  <div className="tip-image-wrapper">
                    <img className="tip-image" src={RunImage} alt="run" />
                  </div>
                </div>
                <div className="healthy-tip">
                  <p>Eat healthier</p>
                  <div className="tip-image-wrapper">
                    <img className="tip-image" src={HealthierImage} alt="healthier" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return "Loading";
}

export default Employee;
