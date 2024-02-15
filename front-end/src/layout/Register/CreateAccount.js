import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CreateAccount() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const navigate = useNavigate();

  function handleCreateSubmit(data) {
    console.log(data);
    navigate("/register/activities");
  }

  console.log({...register("employee")})
  

  return (
    <div className="page">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <div className="radiogroup-wrapper">
          <div className="formgroup-horizontal">
            <input
              type="radio"
              name="employee"
              id="employee"
              required
              {...register("employee")}
            />
            <label htmlFor="employee">Employee</label>
          </div>
          <div className="formgroup-horizontal">
            <input
              type="radio"
              name="employee"
              id="admin"
              {...register("admin")}
            />
            <label htmlFor="admin">Admin</label>
          </div>
        </div>
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
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="first-name">First Name</label>
            <input
              required
              type="text"
              name="first-name"
              placeholder="Enter your first name"
              {...register("first-name")}
            />
          </div>
          <div className="form-input">
            <label htmlFor="last-name">Last Name</label>
            <input
              required
              type="text"
              name="last-name"
              placeholder="Enter your last name"
              {...register("last-name")}
            />
          </div>
        </div>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input
              required
              type="date"
              name="date-of-birth"
              {...register("date-of-birth")}
            />
          </div>
          <div className="form-input">
            <label htmlFor="gender">Gender</label>
            <select name="gender" required {...register("gender")}>
             <option value={"female"}>Female</option>
              <option value={"male"}>Male</option>
              <option value={"non-binary"}>Non-binary</option>
            </select>
          </div>
        </div>
        <div className="input-couple">
          <div className="form-input">
            <label htmlFor="occupation">Occupation</label>
            <input
              required
              type="text"
              name="occupation"
              placeholder="Enter your occupation"
              {...register("occupation")}
            />
          </div>
          <div className="form-input">
            <label htmlFor="company">Company</label>
            <input
              required
              type="text"
              name="company"
              placeholder="Enter your company"
              {...register("company")}
            />
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
