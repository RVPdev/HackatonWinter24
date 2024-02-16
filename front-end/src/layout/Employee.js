import { useState, useEffect } from "react";
import "./Register/register.css";
import { useParams } from "react-router-dom";
import HappyIcon from "./../assets/happyicons/Happy.png";
import AngryIcon from "./../assets/happyicons/Angry.png";
import MehIcon from "./../assets/happyicons/Meh.png";
import SadIcon from "./../assets/happyicons/Sad.png";
import TiredIcon from "./../assets/happyicons/Tired.png";

function Employee() {
  const [user, setUser] = useState(null);
  const { employeeId } = useParams();

  /* Load User via url*/
  useEffect(() => {
    /* fetch from DB using employeeId*/
    setUser({
      email: "a@b.com",
      "first-name": "first name",
      "last-name": "last name",
      password: "test-password",
    });
  }, []);

  if (user) {
    return (
      <div className="employee-page-wrapper">
        <div className="employee-column-1">
          <h1>Welcome {user["first-name"]}</h1>
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
          <button className="add-entry-button">
            <img className="plus-btn-img" src={HappyIcon} alt="icon"/>
            <p>ADD YOUR DAILY ENTRY</p>
          </button>
        </div>
        <div className="employee-column-2">
          <h1>Weekly Reports</h1>
        </div>
      </div>
    );
  }

  return "Loading";
}

export default Employee;
