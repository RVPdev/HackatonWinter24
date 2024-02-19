import { searchEmployees } from "../../utils/api";
import "./Admin.css";
import React, { useEffect, useState } from "react";
import ErrorAlert from "../ErrorAlert";
import EmployeeTable from "./EmployeeTable";
import { deleteEmployee } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import DeleteEmployee from "./DeleteEmployee";
import { useCallback } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Admin() {
  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const [employeeToDelete, setEmployeeToDelete] = useState(null)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setEmployeeToDelete(null)
    setOpen(false)
  }; 

  // Function to handle the change in the input field
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (user) => {
    setEmployeeToDelete(user)
  }

  const loadEmployees = useCallback(
    async () => {
       try {
         const response = await searchEmployees(searchQuery);
         console.log( `response is ${JSON.stringify(response)}`)
         setEmployees([...response])
       } catch (error) {
         setError(error)
       }
     },
     [searchQuery],
   )

  /* Opens modal (pop-up) if there is an employee to delete*/ 
  useEffect(()=>{
    if(employeeToDelete) {
      setOpen(true)
    }
  }, [employeeToDelete])

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    loadEmployees();
  };
 
  

  return (
    <>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {employeeToDelete ? <DeleteEmployee employeeToDelete={employeeToDelete} handleClose={handleClose} setError={setError}/>: null}
        </Box>
      </Modal>
    <section className="admin-section" id="admin">
      {error? <ErrorAlert error={error} /> : null}
      <div className="stack">
        <div className="top-ad">
          <div className="admin-title">
            <h2>Welcome Admin User!</h2>
            <h3>Company Name</h3>
          </div>
          <div className="btn-wrap">
            <button onClick={()=>navigate("/register")}>
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
    </>
  );
}

export default Admin;
