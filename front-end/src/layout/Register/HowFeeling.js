import React from "react";

function HowFeeling() {
  return (
    <div className="page">
        <h1>How are you feeling?</h1>
        <form>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            required
            type="text"
            name="password"
            placeholder="Enter your password"
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
            />
          </div>
          <div className="form-input">
            <label htmlFor="last-name">Last Name</label>
            <input
              required
              type="text"
              name="last-name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="input-couple">
            <div className="form-input">
              <label htmlFor="date-of-birth">Date of birth</label>
              <input required type="date" name="date-of-birth" />
            </div>
            <div className="form-input">
              <label htmlFor="gender">Gender</label>
              <select name="gender" required>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Other"}>Other</option>
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
              />
            </div>
            <div className="form-input">
              <label htmlFor="company">Company</label>
              <input
                required
                type="text"
                name="last-name"
                placeholder="Enter your company"
              />
            </div>
        </div>
        <button type="submit" className="submit-form-button">SUBMIT</button>
          </form>
    </div>
  );
}

export default HowFeeling;
