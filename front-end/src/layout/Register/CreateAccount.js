import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createAccount } from "../../utils/api";
import "./register.css"


function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function handleCreateSubmit(data) {
    console.log(data);
    /* need to submit to DB and receive an employeeId*/
    const {employeeId} = await createAccount(data)

    navigate("/register/more", {
      replace: true, 
      state: {
        employeeId: employeeId
      }
   });
  }

  return (
    <div className="page">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", { required: true, minLength: 3 })}
            minLength={3}
          />
          {errors["email"] && <p className="form-error-alert">Please check the email</p>}
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true, minLength: 5, maxLength: 20 })}
          />
          {errors["password"] && <p className="form-error-alert">Please check the password</p>}
        </div>
          <div className="form-input">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              {...register("first-name", { required: true })}
            />
            {errors["first-name"] && <p className="form-error-alert">Please check the first name</p>}
          </div>
          <div className="form-input">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              {...register("last-name", { required: true })}
            />
            {errors["last-name"] && <p className="form-error-alert">Please check the last name</p>}
          </div>
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
