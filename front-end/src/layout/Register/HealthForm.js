import { useForm } from "react-hook-form";
import HappyIcon from "./../../assets/happyicons/Happy.png";
import AngryIcon from "./../../assets/happyicons/Angry.png";
import MehIcon from "./../../assets/happyicons/Meh.png";
import SadIcon from "./../../assets/happyicons/Sad.png";
import TiredIcon from "./../../assets/happyicons/Tired.png";
import "./healthform.css";

function HealthForm() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  function onSubmit(data) {
    console.log(data)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Daily Health Tracker</h1>
        <h4>How are you feeling?</h4>
        <div className="emoji-wrapper">
          <label className="formatted-radio">
            Happy
            <input type="radio" name="mood" value={1} {...register("mood")} />
            <div>
              <img className="emoji" src={HappyIcon} alt="happy icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Sad
            <input type="radio" name="mood" value={2} {...register("mood")} />
            <div>
              <img className="emoji" src={SadIcon} alt="sad icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Upset
            <input type="radio" name="mood" value={3} {...register("mood")} />
            <div>
              <img className="emoji" src={AngryIcon} alt="upset icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Tired
            <input type="radio" name="mood" value={4} {...register("mood")} />
            <div>
              <img className="emoji" src={TiredIcon} alt="tired icon" />
            </div>
          </label>
          <label className="formatted-radio">
            Meh
            <input type="radio" name="mood" value={5} {...register("mood")} />
            <div>
              <img className="emoji" src={MehIcon} alt="meh icon" />
            </div>
          </label>
        </div>

        <h4>How long did you sleep?</h4>
        <div className="emoji-wrapper">
          <label>
            >5 hours
            <input type="radio" name="sleep" value={1} {...register("sleep")} />
          </label>
          <label>
            5-7 hours
            <input type="radio" name="sleep" value={2} {...register("sleep")} />
          </label>
          <label>
            8 hours
            <input type="radio" name="sleep" value={3} {...register("sleep")} />
          </label>
          <label>
            9 hours
            <input type="radio" name="sleep" value={4} {...register("sleep")} />
          </label>
          <label>
            10+ hours
            <input type="radio" name="sleep" value={5} {...register("sleep")} />
          </label>
        </div>

        <h4>How active were you today?</h4>
        <div className="emoji-wrapper">
          <label>
            1
            <input type="radio" name="activity" value={1} {...register("activity")} />
          </label>
          <label>
            2
            <input type="radio" name="activity" value={2} {...register("activity")} />
          </label>
          <label>
            3
            <input type="radio" name="activity" value={3} {...register("activity")} />
          </label>
          <label>
            4
            <input type="radio" name="activity" value={4} {...register("activity")} />
          </label>
          <label>
            5
            <input type="radio" name="activity" value={5} {...register("activity")} />
          </label>
        </div>

        <h4>How stressed are you feeling today?</h4>
        <div className="emoji-wrapper">
          <label>
            1
            <input type="radio" name="stress" value={1} {...register("stress")} />
          </label>
          <label>
            2
            <input type="radio" name="stress" value={2} {...register("stress")} />
          </label>
          <label>
            3
            <input type="radio" name="stress" value={3} {...register("stress")} />
          </label>
          <label>
            4
            <input type="radio" name="stress" value={4} {...register("stress")} />
          </label>
          <label>
            5
            <input type="radio" name="stress" value={5} {...register("stress")} />
          </label>
        </div>

        <button className="submit-form-button">SUBMIT</button>
      </form>
  );
}

export default HealthForm;
