import { searchEmployees } from "../../utils/api";
import "./Admin.css";
import React, { useState } from "react";
import ErrorAlert from "../ErrorAlert";
import EmployeeTable from "./EmployeeTable";
import { deleteEmployee } from "../../utils/api";

function Admin() {
  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState(null)
  const [error, setError] = useState(null)

  // Function to handle the change in the input field
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (employeeId) => {
    console.log(`deleting ${employeeId}`)
    try {
      await deleteEmployee(employeeId)
    } catch (error) {
      setError(error)
    }
  }

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    console.log("Searching for:", searchQuery);

    try {
      const response = await searchEmployees(searchQuery);
      setEmployees(response)
    } catch (error) {
      setError(error)
    }
   
    
    // Here you can add your search logic, like filtering data or making an API call
  };

  return (
    <section className="admin-section" id="admin">
      {error? <ErrorAlert error={error} /> : null}
      <div className="stack">
        <div className="top-ad">
          <div className="admin-title">
            <h2>Welcome Admin User!</h2>
            <h3>Company Name</h3>
          </div>
          <div className="btn-wrap">
            <button>
              <p>
                ADD AN <br /> EMPLOYEE
              </p>
              <i className="ri-add-circle-fill"></i>
            </button>
          </div>
        </div>

        <div className="search-container">
          <form onSubmit={handleSubmit} className="search-bar-form">
            <div className="search-input-container">
              <i className="ri-search-line search-icon"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search for an employee"
                className="search-input"
              />
            </div>
            <button type="submit">Submit Query</button>
          </form>
        </div>

        <div className="">
          <div>
            <h2>Employees</h2>
            <div>{employees ? <EmployeeTable employees={employees} handleDelete={handleDelete} /> : null }</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
