import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Reminder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function handleReminderSubmit(data) {
    /* Backend needs to send me employee id*/
    console.log(data)
    const employeeId = 1;
    //navigate(`/employees/${employeeId}`);

  }

  return (
    <div className="page">
      <h1>When would you like to receive a reminder?</h1>
      <form onSubmit={handleSubmit(handleReminderSubmit)}>
        <input
          style={{ width: "100%" }}
          type="time"
          name="time"
          id="time"
          required
          {...register("time")}
        />
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Reminder;
