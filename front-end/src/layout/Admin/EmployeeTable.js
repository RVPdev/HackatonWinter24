function EmployeeTable({ employees, handleDelete }) {
  const rows = employees.map((employee) => {
    return (
      <tr key={employee.user_id} className="tbl-row">
        <td className="tbl-name">
          {employee.user_first_name} {employee.user_last_name}
        </td>

        <td className="tbl-email">{employee.user_email}</td>
        <td className="tbl-btn">
          <button className="btn-ex" onClick={() => handleDelete(employee)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  const noEmployeesMessage = (
    <h1>No employees found. Please edit the search query and try again. </h1>
  );

  return (
    <>
      {rows.length ? (
        <table className="tbl">
          <tbody>{rows}</tbody>
        </table>
      ) : noEmployeesMessage}
    </>
  );
}

export default EmployeeTable;
