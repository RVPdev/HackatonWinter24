import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createAccount } from "../../utils/api";
import "./register.css"
import ErrorAlert from "../ErrorAlert";


function CreateAccount({loggedIn, setLoggedIn}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  async function handleCreateSubmit(data) {
    console.log(data);
    /* need to submit to DB and receive an employeeId*/
    try {
      const user_id = await createAccount(data)
      console.log(`Created user id: ${user_id}`)
      setLoggedIn(true);
      navigate("/register/more", {
        replace: true, 
        state: {
          user_id: user_id
        }
     });


    } catch (error) {
      setError(error)
    }

    
  }

  return (
    <div className="page">
      {error ? <ErrorAlert error={error} /> : null}
      <form className="styled-form" onSubmit={handleSubmit(handleCreateSubmit)}>
      <h1>Create an account</h1>
        <div className="form-input">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("user_email", { required: true, minLength: 3 })}
            minLength={3}
          />
          {errors["user_email"] && <p className="form-error-alert">Please check the email</p>}
        </div>
        <div className="form-input">
          <label htmlFor="user_password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("user_password", { required: true, minLength: 5, maxLength: 20 })}
          />
          {errors["user_password"] && <p className="form-error-alert">Please check the password</p>}
        </div>
          <div className="form-input">
            <label htmlFor="user_first-name">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              {...register("user_first_name", { required: true })}
            />
            {errors["user_first-name"] && <p className="form-error-alert">Please check the first name</p>}
          </div>
          <div className="form-input">
            <label htmlFor="user_last-name">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              {...register("user_last_name", { required: true })}
            />
            {errors["user_last-name"] && <p className="form-error-alert">Please check the last name</p>}
          </div>
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
