import React, { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitMore } from "../../utils/api";
import "../Register/register.css";
import ErrorAlert from "../ErrorAlert";

function More({ loggedIn, userId }) {
  const {
    register,
    handleSubmit,
    formState : {errors},
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const location = useLocation();
  const user_id = location?.state?.user_id || userId;

  if (!loggedIn || !user_id) {
    return <Navigate to="/register" />;
  }

  async function handleMoreSubmit(data) {
    console.log(`user_id: ${user_id}, data: ${JSON.stringify(data)}`);
    try {
      await submitMore(user_id, data);

      navigate("/register/reminder", {
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
        <form
          className="styled-form style-2"
          onSubmit={handleSubmit(handleMoreSubmit)}
        >
          <h1>Tell us more about you</h1>

          <div className="form-input-container">
            <div className="left-register-section sm-padding-left">
              <div className="form-input">
                <label htmlFor="user_dob">Date of birth</label>
                <input
                  type="date"
                  {...register("user_dob", { required: true })}
                />
                {errors["user_dob"] && (
                  <p className="form-error-alert">
                    Please select a date of birth
                  </p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="user_occupation">Occupation</label>
                <input
                  type="text"
                  placeholder="Enter your occupation"
                  {...register("user_occupation", {
                    required: true,
                    minLength: 2,
                  })}
                />
                {errors["user_occupation"] && (
                  <p className="form-error-alert">
                    Please check the occupation
                  </p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="user_weight">Weight</label>
                <input
                  type="number"
                  placeholder="Enter your weight in pounds"
                  {...register("user_weight", { required: true })}
                />
                {errors["user_weight"] && (
                  <p className="form-error-alert">Please check the weight</p>
                )}
              </div>
            </div>

            <div className="left-register-section sm-padding-right">
              <div className="form-input">
                <label htmlFor="user_gender">Gender</label>
                <select
                  {...register("user_gender", { required: true })}
                  defaultValue=""
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                </select>
                {errors["user_gender"] && (
                  <p className="form-error-alert">Please select a gender</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="user_company">Company</label>
                <input
                  type="text"
                  placeholder="Enter your company"
                  {...register("user_company", {
                    required: true,
                    minLength: 2,
                  })}
                />
                {errors["user_company"] && (
                  <p className="form-error-alert">Please check the company</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="user_height">Height</label>
                <input
                  type="number"
                  placeholder="Enter your height in inches"
                  {...register("user_height", { required: true })}
                />
                {errors["user_height"] && (
                  <p className="form-error-alert">Please check the height</p>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-form-btn more-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default More;
