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
    const { user_id, administer_access } = await login(data);
    /*Backend needs to send me employee ID */
    console.log(`USERID: ${user_id}`)
    if (administer_access) {
      navigate(`/admin`);
    } else {
      navigate(`/employees/${user_id}`);
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
          <label htmlFor="user_email">Email</label>
          <input
            required
            type="text"
            name="user_email"
            placeholder="Enter your email address"
            {...register("user_email")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="user_password">Password</label>
          <input
            required
            type="password"
            name="user_password"
            placeholder="Enter your password"
            {...register("user_password")}
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
