import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createAccount } from "../../utils/api";
import "./register.css";
import ErrorAlert from "../ErrorAlert";
import CreateImage from "../../assets/login_create/create_account_image.png";

function CreateAccount({ loggedIn, setLoggedIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  /* Submits data to DB and receives an employee ID*/
  async function handleCreateSubmit(data) {
    try {
      const response = await createAccount(data)
      const {user_id, administer_access} = response;
      const token = {
        user_id, 
        administer_access
      }
      setLoggedIn(token);
      localStorage.setItem("token", JSON.stringify(token))
      navigate("/register/more", {
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
      <div className="left-register-section">
      <div className="register-title">
          <h1>We can help!</h1>
        </div>
        <div>
          <img
            src={CreateImage}
            alt="register"
            className="register-image-wrapper second-img"
          />
        </div>
      </div>

      <div className="right-register-section">
        {error ? <ErrorAlert error={error} /> : null}
        <form
          className="styled-form-2"
          onSubmit={handleSubmit(handleCreateSubmit)}
        >
          <h1>Create an account</h1>
          <div className="form-input-2">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("user_email", { required: true, minLength: 3 })}
              minLength={3}
            />
            {errors["user_email"] && (
              <p className="form-error-alert">Please check the email</p>
            )}
          </div>
          <div className="form-input-2">
            <label htmlFor="user_password">Password</label>
            <input
              type="password"
              autoComplete="on"
              placeholder="Enter your password"
              {...register("user_password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
            {errors["user_password"] && (
              <p className="form-error-alert">Please check the password</p>
            )}
          </div>
          <div className="form-input-2">
            <label htmlFor="user_first-name">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              {...register("user_first_name", { required: true })}
            />
            {errors["user_first-name"] && (
              <p className="form-error-alert">Please check the first name</p>
            )}
          </div>
          <div className="form-input-2">
            <label htmlFor="user_last-name">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              {...register("user_last_name", { required: true })}
            />
            {errors["user_last-name"] && (
              <p className="form-error-alert">Please check the last name</p>
            )}
          </div>
          <button type="submit" className="submit-form-btn-2">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
