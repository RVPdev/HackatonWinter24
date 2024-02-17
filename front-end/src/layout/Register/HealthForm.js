import { useForm } from "react-hook-form";
import HappyIcon from "./../../assets/happyicons/Happy.png";
import AngryIcon from "./../../assets/happyicons/Angry.png";
import MehIcon from "./../../assets/happyicons/Meh.png";
import SadIcon from "./../../assets/happyicons/Sad.png";
import TiredIcon from "./../../assets/happyicons/Tired.png";
import "./healthform.css";
import { useNavigate, useLocation } from "react-router-dom";
import { submitHealthData } from "../../utils/api";

function HealthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const location = useLocation();
  const employeeId = location.state.employeeId;

  async function onSubmit(data) {
    /* Submit healthform to db leveraging employee ID*/
    console.log(data);
    await submitHealthData(employeeId, data)
    navigate(`/employees/${employeeId}`);
  }

  console.log(`employeeId healthform: ${employeeId}`);

  return (
    <div className="health-form-wrapper">
      <h1>Daily Health Tracker</h1>
      <form className="health-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>How are you feeling?</h4>
        <div className="emoji-wrapper">
          <label className="formatted-radio">
            Happy
            <input
              type="radio"
              name="mood"
              value={1}
              {...register("mood", { required: true })}
            />
            <div>
              <img className="emoji" src={HappyIcon} alt="happy icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Sad
            <input
              type="radio"
              name="mood"
              value={2}
              {...register("mood", { required: true })}
            />
            <div>
              <img className="emoji" src={SadIcon} alt="sad icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Upset
            <input
              type="radio"
              name="mood"
              value={3}
              {...register("mood", { required: true })}
            />
            <div>
              <img className="emoji" src={AngryIcon} alt="upset icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Tired
            <input
              type="radio"
              name="mood"
              value={4}
              {...register("mood", { required: true })}
            />
            <div>
              <img className="emoji" src={TiredIcon} alt="tired icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Meh
            <input
              type="radio"
              name="mood"
              value={5}
              {...register("mood", { required: true })}
            />
            <div>
              <img className="emoji" src={MehIcon} alt="meh icon" />
            </div>
          </label>
        </div>
        {errors["mood"] && <p className="form-error-alert">Please check the mood</p>}


        <h4>How long did you sleep?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>&gt; 5 hours</p>
            <input
              type="radio"
              name="sleep"
              value={1}
              {...register("sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5-7 hours</p>
            <input
              type="radio"
              name="sleep"
              value={2}
              {...register("sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>8 hours</p>
            <input
              type="radio"
              name="sleep"
              value={3}
              {...register("sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>9 hours</p>
            <input
              type="radio"
              name="sleep"
              value={4}
              {...register("sleep", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>10+ hours</p>
            <input
              type="radio"
              name="sleep"
              value={5}
              {...register("sleep", { required: true })}
            />
          </label>
        </div>
        {errors["sleep"] && <p className="form-error-alert">Please check the sleep</p>}

        <h4>How active were you today?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>1</p>
            <input
              type="radio"
              name="activity"
              value={1}
              {...register("activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>2</p>
            <input
              type="radio"
              name="activity"
              value={2}
              {...register("activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>3</p>
            <input
              type="radio"
              name="activity"
              value={3}
              {...register("activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>4</p>
            <input
              type="radio"
              name="activity"
              value={4}
              {...register("activity", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5</p>
            <input
              type="radio"
              name="activity"
              value={5}
              {...register("activity", { required: true })}
            />
          </label>
        </div>
        {errors["activity"] && <p className="form-error-alert">Please check the activity</p>}


        <h4>How stressed are you feeling today?</h4>
        <div className="emoji-wrapper">
          <label className="radio-label">
            <p>1</p>
            <input
              type="radio"
              name="stress"
              value={1}
              {...register("stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>2</p>
            <input
              type="radio"
              name="stress"
              value={2}
              {...register("stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>3</p>
            <input
              type="radio"
              name="stress"
              value={3}
              {...register("stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>4</p>
            <input
              type="radio"
              name="stress"
              value={4}
              {...register("stress", { required: true })}
            />
          </label>
          <label className="radio-label">
            <p>5</p>
            <input
              type="radio"
              name="stress"
              value={5}
              {...register("stress", { required: true })}
            />
          </label>
        </div>
        {errors["stress"] && <p className="form-error-alert">Please check the stress</p>}


        <button type="submit" className="submit-form-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default HealthForm;
