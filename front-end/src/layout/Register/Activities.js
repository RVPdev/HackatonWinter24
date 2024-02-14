import React from 'react';
import { useNavigate } from 'react-router-dom';


function Activities() {

  const navigate = useNavigate()

  function handleActivitySubmit(e){
    e.preventDefault();    
    navigate("/register/reminder")
  }



  return (
    <div className="page">
      <h1>How are you feeling?</h1>
      <form  onSubmit={handleActivitySubmit} className='form-left-aligned'>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="feeling" id="great"/>
          <label htmlFor="great">Great</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="feeling" id="good"/>
          <label htmlFor="good">Good</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="feeling" id="ok"/>
          <label htmlFor="ok">Ok</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="feeling" id="bad"/>
          <label htmlFor="bad">Bad</label>
        </div>
        <div className="formgroup-horizontal">
          <input type="checkbox" name="feeling" id="terrible"/>
          <label htmlFor="terrible">Terrible</label>
        </div>
        <button type="submit" className="submit-form-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default Activities;
