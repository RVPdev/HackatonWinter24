import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitReminder } from "../../utils/api";

function Reminder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function handleReminderSubmit(data) {
    /*send to db leveraging employeeId */
    console.log(data);
    await submitReminder(employeeId, data);
    navigate("/register/mental", {
      replace: true,
      state: {
        employeeId: employeeId,
      },
    });
  }

  const location = useLocation();
  const employeeId = location.state.employeeId;
  console.log(`employee id Reminder: ${employeeId}`);

  return (
    <div className="page">
      <form
        className="styled-form"
        onSubmit={handleSubmit(handleReminderSubmit)}
      >
        <h1>When would you like to receive a reminder?</h1>
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
