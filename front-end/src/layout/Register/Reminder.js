import React from "react";

function Reminder() {
  return (
    <div className="page">
      <h1>When would you like to receive a reminder?</h1>
      <form>
          <input style={{width: "100%"}} type="time" name="time" id="time" />
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Reminder;
