import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../utils/api";
import "./Register/register.css";
import LoginImage from "./../assets/login_create/login_image.png";
import ErrorAlert from "./ErrorAlert";
import { useState } from "react";

function Login({ loggedIn, setLoggedIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  async function submitLogin(data) {
    const response = await login(data);

    if (!response) {
      setError({
        message: "Username and password doesn't exist or is incorrect",
      });
    } else {
      const { user_id, administer_access } = response;
      const token = {
        user_id,
        administer_access,
      };
      localStorage.setItem("token", JSON.stringify(token));
      setLoggedIn(token);
      navigate(`/employees/${user_id}`);
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
          {error ? <ErrorAlert error={error} /> : null}
          <div className="form-input">
            <label htmlFor="user_email">Email</label>
            <input
              type="text"
              placeholder="Enter your email address"
              {...register("user_email", { required: true })}
            />
            {errors["user_email"] ? <p>Please check the email</p> : null}
          </div>
          <div className="form-input">
            <label htmlFor="user_password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="on"
              {...register("user_password", { required: true })}
            />
            {errors["user_password"] ? <p>Please check the password</p> : null}
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn-text" to="/register">
            Create an account
          </Link>
          <button type="submit" className="submit-form-btn log-in-btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
