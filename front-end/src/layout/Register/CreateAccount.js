import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function handleCreateSubmit(data) {
    console.log("submitted")
    console.log(data);
    // navigate("/register/activities");
  }

  return (
    <div className="page">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <div className="radiogroup-wrapper">
          <div className="formgroup-horizontal">
            <input
              type="checkbox"
              id="employee"
              {...register("employee", { required: true })}
            />
            <label htmlFor="employee">Employee</label>
          </div>
          <div className="formgroup-horizontal">
            <input
              type="checkbox"
              id="admin"
              value={"admin"}
              {...register("admin", { required: true })}
            />
            <label htmlFor="admin">Admin</label>
          </div>
        </div>
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
        <div className="input-couple">
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
        </div>
        <div className="input-couple">
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
        </div>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              placeholder="Enter your occupation"
              {...register("occupation", { required: true })}
            />
            {errors["occupation"] && <p className="form-error-alert">Please check the occupation</p>}
          </div>
          <div className="form-input">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              placeholder="Enter your company"
              {...register("company", { required: true })}
            />
            {errors["company"] && <p className="form-error-alert">Please check the company</p>}
          </div>
        </div>
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
