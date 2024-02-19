import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../utils/api";
import "./Register/register.css";
import LoginImage from "./../assets/login_create/login_image.png";
import ErrorAlert from "./ErrorAlert";
import { useState } from "react";

function Login({loggedIn, setLoggedIn}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [error, setError] = useState(null)

  async function submitLogin(data) {
    console.log(data);
    const response = await login(data);

    if(!response) {
      setError({message: "Username and password doesn't exist or is incorrect"})
    } else {
      const { user_id, administer_access } = response;
      console.log(`USERID: ${user_id}`);
      setLoggedIn(true)
      if (administer_access) {
        navigate(`/admin`);
      } else {
        navigate(`/employees/${user_id}`);
      }
    }
    
  }

  return (
    <div className="page">
      <div className="left-register-section">
        <div className="register-title">
          <h1>Welcome back!</h1>
        </div>
        <div>
          <img
            src={LoginImage}
            alt="log-in"
            className="register-image-wrapper"
          />
        </div>
      </div>
      <div className="right-register-section">
        <form className="styled-form" onSubmit={handleSubmit(submitLogin)}>
          <h1>Log in</h1>
          {error? <ErrorAlert error={error} /> : null}
          <div className="form-input">
            <label htmlFor="user_email">Email</label>
            <input
              required
              type="text"
              name="user_email"
              placeholder="Enter your email address"
              {...register("user_email", {required: true})}
            />
          </div>
          <div className="form-input">
            <label htmlFor="user_password">Password</label>
            <input
              required
              type="password"
              name="user_password"
              placeholder="Enter your password"
              autoComplete="on"
              {...register("user_password", {required: true})}
            />
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn-text" to="/register">
            Create an account
          </Link>
          <button type="submit" className="submit-form-btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
