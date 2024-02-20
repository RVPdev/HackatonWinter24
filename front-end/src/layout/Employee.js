import { useState, useEffect } from "react";
import "./employeepage.css";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import HappyIcon from "./../assets/happyicons/Happy.png";
import AngryIcon from "./../assets/happyicons/Angry.png";
import MehIcon from "./../assets/happyicons/Meh.png";
import SadIcon from "./../assets/happyicons/Sad.png";
import TiredIcon from "./../assets/happyicons/Tired.png";
import MehColored from "./../assets/happyicons/Meh_color.png";
import HappyColored from "./../assets/happyicons/Happy_color.png";
import AngryColored from "./../assets/happyicons/Angry_color.png";
import TiredColored from "./../assets/happyicons/Tired_color.png";
import SadColored from "./../assets/happyicons/Sad_color.png";
import HealthierImage from "./../assets/dashboard/healthier.png";
import MeditateImage from "./../assets/dashboard/meditate.png";
import RunImage from "./../assets/dashboard/run.png";
import Modal from "@mui/material/Modal";
import { loadEmployee } from "../utils/api";
import { Box, Typography } from "@mui/material";
import HealthForm from "./Register/HealthForm.js";
import Chart from "./Chart.js";
import ErrorAlert from "./ErrorAlert.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Employee({ loggedIn, setLoggedIn }) {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  /* Load User from database using parameter from URL */
  useEffect(() => {
    const abortController = new AbortController();
    async function getUser() {
      try {
        const employee = await loadEmployee(userId)
        setUser(employee);
        setIsAdmin(employee.administer_access);
      } catch (error) {
        setError(error);
      }
    }
    getUser();
    return () => abortController.abort();
  }, [userId]);

  function getEmojiAndText() {
    const avgMood = user.average_mood;
    if (avgMood > 4) {
      return { emoji: MehColored, text: "Meh" };
    } else if (avgMood > 3) {
      return { emoji: TiredColored, text: "Tired" };
    } else if (avgMood > 2) {
      return { emoji: AngryColored, text: "Angry" };
    } else if (avgMood > 1) {
      return { emoji: SadColored, text: "Sad" };
    } else {
      return { emoji: HappyColored, text: "Happy" };
    }
  }

  if (!loggedIn || !userId) {
    return (
      <h2>
        You are not logged in. Please log in at{" "}
        <Link to="/login">the login page</Link>
      </h2>
    );
  }

  if (user) {
    return (
      <div>
        {error ? <ErrorAlert error={error} /> : null}
        <Link to="/register/more" state={{ user_id: userId }}>
          Edit Additional Information
        </Link>
        <Link to="/register/reminder" state={{ user_id: userId }}>
          Edit Reminder Time
        </Link>
        {isAdmin ? <Link to="/admin">Go to Admin Page</Link> : null}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <HealthForm userId={userId} handleClose={handleClose} />
          </Box>
        </Modal>
        <h1 className="employee-header">
          Welcome {user["user_first_name"]} {user["user_last_name"]}
        </h1>
        <div className="employee-page-wrapper">
          <div className="employee-column-1">
            <h1>How are you feeling?</h1>
            <button className="add-entry-button" onClick={handleOpen}>
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
                    src={getEmojiAndText().emoji}
                    className="mood-image"
                    alt="variable"
                  />
                </div>
                <p>{getEmojiAndText().text}</p>
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
              <Chart userDataset={user.dataset} />
            </div>

            <div className="helpful-tips-section">
              <h1>Helpful tips</h1>
              <div className="healthy-tips-wrapper">
                <div className="healthy-tip">
                  <p>Meditate</p>
                  <div className="tip-image-wrapper">
                    <img
                      className="tip-image"
                      src={MeditateImage}
                      alt="meditate"
                    />
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
                    <img
                      className="tip-image"
                      src={HealthierImage}
                      alt="healthier"
                    />
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
