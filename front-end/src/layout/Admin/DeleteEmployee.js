import React from 'react'
import { deleteEmployee } from '../../utils/api'

function DeleteEmployee({employeeToDelete, handleClose, setError}) {

   const onCancel = ()=> {
    handleClose()
   }

   const onDelete = async ()=> {
     try {
      await deleteEmployee(employeeToDelete.user_id)
      handleClose();
    } catch (error) {
      setError(error)
      handleClose()
    }
   }

   console.log(`employeetodelete: ${JSON.stringify(employeeToDelete)}`)

  return (
    <>
        <p>Do you want to delete employee {employeeToDelete.user_first_name} {employeeToDelete.user_last_name} with ID {employeeToDelete.user_id}? </p>
        <button onClick={onCancel}>CANCEL</button>
        <button onClick={onDelete}>DELETE</button>
    </>
    

  )
}

export default DeleteEmployee