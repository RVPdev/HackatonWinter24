function EmployeeTable({ employees, handleDelete }) {
  const rows = employees.map((employee) => {
    return (
      <tr key={employee.user_id} className="tbl-row">
        <td className="tbl-name">
          {employee.user_first_name}
          {" "}
          {employee.user_last_name}
        </td>

        <td className="tbl-email">{employee.user_email}</td>
        <td className="tbl-btn" >
          <button className="btn-ex" onClick={() => handleDelete(employee)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <table className="tbl">
      <tbody>{rows}</tbody>
    </table>
  );
}

export default EmployeeTable;
