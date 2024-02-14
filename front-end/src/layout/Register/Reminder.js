import React from "react";
import { useNavigate } from "react-router-dom";

function Reminder() {

  const navigate = useNavigate()

  function handleReminderSubmit(e){
    e.preventDefault();    
    navigate("/register/feeling")
  }

  return (
    <div className="page">
      <h1>When would you like to receive a reminder?</h1>
      <form onSubmit={handleReminderSubmit}>
          <input style={{width: "100%"}} type="time" name="time" id="time" required />
          <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Reminder;
