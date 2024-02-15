import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function handleCreateSubmit(data) {
    console.log(data);
    navigate("/register/reminder");
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
          <div className="form-input">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input
              type="date"
              {...register("date-of-birth", { required: true })}
            />
            {errors["date-of-birth"] && <p className="form-error-alert">Please select a date of birth</p>}
          </div>
          <div className="form-input">
            <label htmlFor="gender">Gender</label>
            <select {...register("gender", { required: true })} defaultValue={""} >
             <option value={""}>Select</option>
              <option value={"female"}>Female</option>
              <option value={"male"}>Male</option>
              <option value={"non-binary"}>Non-binary</option>
            </select>
            {errors["gender"] && <p className="form-error-alert">Please select a gender</p>}
          </div>
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
