import "./Admin.css";
import React, { useState } from "react";

function Admin() {
  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the change in the input field
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    console.log("Searching for:", searchQuery);
    // Here you can add your search logic, like filtering data or making an API call
  };

  return (
    <section className="admin-section" id="admin">
      <div className="stack">
        <div className="top-ad">
          <div className="admin-title">
            <h2>Welcome Admin User!</h2>
            <h3>Copmany Name</h3>
          </div>
          <div className="btn-wrap">
            <button>
              <p>
                ADD AN <br /> EMPLOYEE
              </p>
              <i class="ri-add-circle-fill"></i>
            </button>
          </div>
        </div>

        <div className="search-container">
          <form onSubmit={handleSubmit} className="search-bar-form">
            <div className="search-input-container">
              <i class="ri-search-line search-icon"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search for an employee"
                className="search-input"
              />
            </div>
          </form>
        </div>

        <div className="">
          <div>
            <h2>Employees</h2>
            <div>{/* Component with for loop to pull employees */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
