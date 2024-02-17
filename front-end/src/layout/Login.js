import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { login } from "../utils/api";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();

    async function submitLogin(data){
        console.log(data)
        const {employeeId, isAdmin} = await login(data)
        /*Backend needs to send me employee ID */
        if(isAdmin) {
            navigate(`/admin`)
        } else {
            navigate(`/employees/${employeeId}`)
        }
        /* Navigate to employee/employeeId */
    }


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