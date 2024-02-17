import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../utils/api";
import "./Register/register.css";
import LoginImage from "./../assets/login_create/login_image.png"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function submitLogin(data) {
    console.log(data);
    const { employeeId, isAdmin } = await login(data);
    /*Backend needs to send me employee ID */
    if (isAdmin) {
      navigate(`/admin`);
    } else {
      navigate(`/employees/${employeeId}`);
    }
    /* Navigate to employee/employeeId */
  }

  return (
    <div className="page">
      <div className="left-register-section">
        <h1>Welcome back</h1>
        <div className="register-image-wrapper">
            <img src={LoginImage} alt="log-in"/>
        </div>
      </div>  
      <form className="styled-form" onSubmit={handleSubmit(submitLogin)}>
        <h1>Log in</h1>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link className="button-text" to="/register">Create an account</Link>
        <button type="submit" className="submit-form-button">
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default Login;
