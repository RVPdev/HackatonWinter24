import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();

    function submitLogin(data){
        console.log(data)
        /*Backend needs to send me employee ID */
        const employeeId = 1
        navigate(`/employee/:${employeeId}`)
        /* Navigate to employee/employeeId */
    }

    console.log({...register("password")})

  return (
    <div className="page">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit(submitLogin)}>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input required type="text" name="email" placeholder="Enter your email address" 
                        {...register("email")}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" 
                    placeholder="Enter your password" 
                    {...register("password")}
                    />
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="/register">Create an account</Link>
                <button type="submit" className="submit-form-button">LOG IN</button>
        </form>
    </div>
  )
}

export default Login