import React, { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitReminder } from "../../utils/api";
import ErrorAlert from "../ErrorAlert";
import { loadAdditional } from "../../utils/api";

function Reminder({ loggedIn, userId }) {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues :  async () => {
      if (user_id) {
        return loadAdditional(user_id);
      } else {
        return {}
      }
    },
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const location = useLocation();
  const user_id = location?.state?.user_id || userId;

  if (!loggedIn || !user_id) {
    return <Navigate to="/register" />;
  }

  async function handleReminderSubmit(data) {
    try {
      await submitReminder(user_id, data);
      navigate("/register/mental", {
        replace: true,
        state: {
          user_id: user_id,
        },
      });
    } catch (error) {
      setError(error);
    }
  }


  return (
    <div className="page">
      <div className="page-container">
        {error ? <ErrorAlert error={error} /> : null}
        <form className="styled-form reminder-format" onSubmit={handleSubmit(handleReminderSubmit)}>
          <h1>When would you like to receive a reminder?</h1>
          <input
            type="time"
            id="time"
            required
            {...register("user_scheduled_time", {required: true})}
          />
          <button type="submit" className="submit-form-btn custom-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reminder;
