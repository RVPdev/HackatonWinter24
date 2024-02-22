import { searchEmployees } from "../../utils/api";
import "./Admin.css";
import React, { useEffect, useState } from "react";
import ErrorAlert from "../ErrorAlert";
import EmployeeTable from "./EmployeeTable";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import DeleteEmployee from "./DeleteEmployee";
import { useCallback } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

function Admin() {
  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  /* Determines if pop-up is open or not*/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  /* Runs when pop-up closes */
  const handleClose = () => {
    setEmployeeToDelete(null);
    setOpen(false);
  };

  // Function to handle the change in the input field
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (user) => {
    setEmployeeToDelete(user);
  };

  /* Loads employees from db - called when search query is executed or when employee is deleted */
  const loadEmployees = useCallback(async () => {
    try {
      const response = await searchEmployees(searchQuery);
      setEmployees([...response]);
    } catch (error) {
      setError(error);
    }
  }, [searchQuery]);

  /* Opens modal (pop-up) if there is an employee to delete*/
  useEffect(() => {
    if (employeeToDelete) {
      handleOpen();
    }
  }, [employeeToDelete]);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    loadEmployees();
  };

  /*Checks if user is logged in as admin */
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token && token.administer_access) {
      setIsAdmin(true);
    }
  }, []);

  if (!isAdmin) {
    return (
      <h2>
        You are not logged in as an admin user. Please log in at{" "}
        <Link to="/login">the login page.</Link>
      </h2>
    );
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="pop-up">
          {employeeToDelete ? (
            <DeleteEmployee
              employeeToDelete={employeeToDelete}
              handleClose={handleClose}
              setError={setError}
              loadEmployees={loadEmployees}
            />
          ) : null}
        </Box>
      </Modal>
      <section className="admin-section" id="admin">
        {error ? <ErrorAlert error={error} /> : null}
        <div className="stack stack-wrp">
          <div className="top-ad">
            <div className="admin-title">
              <h2>Welcome Admin User!</h2>
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
              <button type="submit" className="btn-wrap srch-btn">
                SEARCH
              </button>

              <button
                className="btn-wrap"
                onClick={() => navigate("/register")}
              >
                <p>ADD AN EMPLOYEE</p>
                <i className="ri-add-circle-fill"></i>
              </button>
            </form>
          </div>

          {employees ? (
            <div className="employee-wrap">
              <h2>Employees</h2>
              <div className="employee-table">
                <EmployeeTable
                  employees={employees}
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default Admin;
