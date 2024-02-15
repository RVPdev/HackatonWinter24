import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Activities() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const navigate = useNavigate();

  function handleActivitySubmit(data) {
    console.log(data)
    navigate("/register/reminder");
  }

  return (
    <div className="page">
      <h1>Choose the activities you would like to track</h1>
      <form className='form-left-aligned' onSubmit={handleSubmit(handleActivitySubmit)}>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="emotion" required id="emotion" {...register("emotion")} />
          <label htmlFor="emotion">Emotion</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="sleep" id="sleep" {...register("sleep")} />
          <label htmlFor="sleep">Sleep</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="health" id="health" {...register("health")} />
          <label htmlFor="health">Health</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="food" id="food" {...register("food")} />
          <label htmlFor="food">Food</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="social" id="social" {...register("social")} />
          <label htmlFor="social">Social</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="productivity" id="productivity" {...register("productivity")} />
          <label htmlFor="productivity">Productivity</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="exercises" id="exercises" {...register("exercises")} />
          <label htmlFor="exercises">Exercises</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="errands" id="errands" {...register("errands")} />
          <label htmlFor="errands">Errands</label>
        </div>
        <button type="submit" className="submit-form-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default Activities;
