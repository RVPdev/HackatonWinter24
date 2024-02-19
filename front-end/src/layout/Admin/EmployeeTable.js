
function EmployeeTable({employees, handleDelete}) {

  const rows = employees.map((employee) => {
    return (
        <tr key={employee.user_id}>
            <td>
                {employee.user_first_name}
            </td>
            <td>
                {employee.user_last_name}
            </td>
            <td>
                {employee.user_email}
            </td>
            <td>
                <button onClick={()=> handleDelete(employee)}>Delete</button>
            </td>
        </tr>
    )
  })
    

  return (
    <table>
        <tbody>
            {rows}
        </tbody>
    </table>
  )
}

export default EmployeeTable