import { deleteEmployee } from "../../utils/api";

function DeleteEmployee({
  employeeToDelete,
  handleClose,
  setError,
  loadEmployees,
}) {
  const onCancel = () => {
    handleClose();
  };

  /* Deletes employee from DB and refreshes list of employees */
  const onDelete = async () => {
    try {
      await deleteEmployee(employeeToDelete.user_id);
      loadEmployees();
    } catch (error) {
      setError(error);
    }
    handleClose();
  };

  return (
    <>
      <p>
        Do you want to delete employee {employeeToDelete.user_first_name}{" "}
        {employeeToDelete.user_last_name} with ID {employeeToDelete.user_id}?{" "}
      </p>

      <button onClick={onCancel} className="pop-btn">
        CANCEL
      </button>
      <button onClick={onDelete} className="pop-btn">
        DELETE
      </button>
    </>
  );
}

export default DeleteEmployee;
