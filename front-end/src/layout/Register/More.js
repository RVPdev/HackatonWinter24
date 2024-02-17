import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { submitMore } from '../../utils/api';
import '../Register/register.css';

function More() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function handleMoreSubmit(data) {
    /* Add this data to db leveraging employee id*/
    console.log(`employeeid: ${employeeId}, data: ${JSON.stringify(data)}`);

    await submitMore(employeeId, data)
  
    navigate("/register/reminder", {
      replace: true, 
      state: {
        employeeId: employeeId
      }
   })
  }

  

  const location = useLocation();  
  const employeeId = location.state.employeeId
  console.log(`employeeId more: ${employeeId}`)

  return (
    <div className="page">
      <form className="styled-form" onSubmit={handleSubmit(handleMoreSubmit)}>
        <h1>Tell us more about you</h1>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input
              type="date"
              {...register('date-of-birth', { required: true })}
            />
            {errors['date-of-birth'] && <p className="form-error-alert">Please select a date of birth</p>}
          </div>
          <div className="form-input">
            <label htmlFor="gender">Gender</label>
            <select {...register('gender', { required: true })} defaultValue="">
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
            </select>
            {errors['gender'] && <p className="form-error-alert">Please select a gender</p>}
          </div>
        </div>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              placeholder="Enter your occupation"
              {...register('occupation', { required: true, minLength: 2 })}
            />
            {errors['occupation'] && <p className="form-error-alert">Please check the occupation</p>}
          </div>
          <div className="form-input">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Enter your company"
              {...register('company', { required: true, minLength: 2 })}
            />
            {errors['company'] && <p className="form-error-alert">Please check the company</p>}
          </div>
        </div>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              placeholder="Enter your weight"
              {...register('weight', { required: true })}
            />
            {errors['weight'] && <p className="form-error-alert">Please check the weight</p>}
          </div>
          <div className="form-input">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              placeholder="Enter your height"
              {...register('height', { required: true })}
            />
            {errors['height'] && <p className="form-error-alert">Please check the height</p>}
          </div>
        </div>
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default More;
