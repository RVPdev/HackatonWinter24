import { useForm } from "react-hook-form";
import HappyIcon from "./../../assets/happyicons/Happy.png";
import AngryIcon from "./../../assets/happyicons/Angry.png";
import MehIcon from "./../../assets/happyicons/Meh.png";
import SadIcon from "./../../assets/happyicons/Sad.png";
import TiredIcon from "./../../assets/happyicons/Tired.png";
import "./healthform.css";
import { useNavigate, useLocation } from "react-router-dom";
import { submitHealthData } from "../../utils/api";
import { useState } from "react";
import ErrorAlert from "../ErrorAlert";

function HealthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  const location = useLocation();
  const user_id = location.state.user_id;

  async function onSubmit(data) {
    /* Submit healthform to db leveraging employee ID*/
    console.log(data);
    try {
      await submitHealthData(user_id, data)
      navigate(`/employees/${user_id}`);
    } catch (error) {
      setError(error)
    }
    
  }

  console.log(`user_id healthform: ${user_id}`);

  return (
    <div className="health-form-wrapper">
      {error ? <ErrorAlert error={error} /> : null}
      <h1>Daily Health Tracker</h1>
      <form className="health-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>How are you feeling?</h4>
        <div className="emoji-wrapper">
          <label className="formatted-radio">
            Happy
            <input
              type="radio"
              name="user_mood"
              value={1}
              {...register("user_mood", { required: true })}
            />
            <div>
              <img className="emoji" src={HappyIcon} alt="happy icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Sad
            <input
              type="radio"
              name="user_mood"
              value={2}
              {...register("user_mood", { required: true })}
            />
            <div>
              <img className="emoji" src={SadIcon} alt="sad icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Upset
            <input
              type="radio"
              name="user_mood"
              value={3}
              {...register("user_mood", { required: true })}
            />
            <div>
              <img className="emoji" src={AngryIcon} alt="upset icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Tired
            <input
              type="radio"
              name="user_mood"
              value={4}
              {...register("user_mood", { required: true })}
            />
            <div>
              <img className="emoji" src={TiredIcon} alt="tired icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Meh
            <input
              type="radio"
              name="user_mood"
              value={5}
              {...register("user_mood", { required: true })}
            />
            <div>
              <img className="emoji" src={MehIcon} alt="meh icon" />
            </div>
          </label>
        </div>
        {errors["user_mood"] && <p className="form-error-alert">Please check the mood</p>}


        <h4>How long did you sleep?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>&gt; 5 hours</p>
            <input
              type="radio"
              name="user_sleep"
              value={1}
              {...register("user_sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5-7 hours</p>
            <input
              type="radio"
              name="user_sleep"
              value={2}
              {...register("user_sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>8 hours</p>
            <input
              type="radio"
              name="user_sleep"
              value={3}
              {...register("user_sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>9 hours</p>
            <input
              type="radio"
              name="user_sleep"
              value={4}
              {...register("user_sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>10+ hours</p>
            <input
              type="radio"
              name="user_sleep"
              value={5}
              {...register("user_sleep", { required: true })}
            />
          </label>
        </div>
        {errors["user_sleep"] && <p className="form-error-alert">Please check the sleep</p>}

        <h4>How active were you today?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>1</p>
            <input
              type="radio"
              name="user_activity"
              value={1}
              {...register("user_activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>2</p>
            <input
              type="radio"
              name="user_activity"
              value={2}
              {...register("user_activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>3</p>
            <input
              type="radio"
              name="user_activity"
              value={3}
              {...register("user_activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>4</p>
            <input
              type="radio"
              name="user_activity"
              value={4}
              {...register("user_activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5</p>
            <input
              type="radio"
              name="user_activity"
              value={5}
              {...register("user_activity", { required: true })}
            />
          </label>
        </div>
        {errors["user_activity"] && <p className="form-error-alert">Please check the activity</p>}


        <h4>How stressed are you feeling today?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>1</p>
            <input
              type="radio"
              name="user_stress"
              value={1}
              {...register("user_stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>2</p>
            <input
              type="radio"
              name="user_stress"
              value={2}
              {...register("user_stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>3</p>
            <input
              type="radio"
              name="user_stress"
              value={3}
              {...register("user_stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>4</p>
            <input
              type="radio"
              name="user_stress"
              value={4}
              {...register("user_stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5</p>
            <input
              type="radio"
              name="user_stress"
              value={5}
              {...register("user_stress", { required: true })}
            />
          </label>
        </div>
        {errors["user_stress"] && <p className="form-error-alert">Please check the stress</p>}


        <button type="submit" className="submit-form-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default HealthForm;
