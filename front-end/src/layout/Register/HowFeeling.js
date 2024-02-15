import React from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function HowFeeling() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const navigate = useNavigate();

  function handleFeelingSubmit(data){
    console.log(data)
    /*To be changed to dashboard */
    navigate("/")
  }

  return (
    <div className="page">
      <h1>How are you feeling?</h1>
      <form className='form-left-aligned' onSubmit={handleSubmit(handleFeelingSubmit)}>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="great" id="great" {...register("great")} required/>
          <label htmlFor="great">Great</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="good" id="good" {...register("good")}/>
          <label htmlFor="good">Good</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="ok" id="ok" {...register("ok")}/>
          <label htmlFor="ok">Ok</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="bad" id="bad" {...register("bad")}/>
          <label htmlFor="bad">Bad</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="terrible" id="terrible" {...register("terrible")}/>
          <label htmlFor="terrible">Terrible</label>
        </div>
        <button type="submit" className="submit-form-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default HowFeeling;
