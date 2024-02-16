import HealthForm from "./HealthForm"

function HealthPage({employeeId}) {

  console.log(`employeeID healthpage: ${employeeId}`);
  
  return (
    <div>
        <HealthForm employeeId={employeeId} />
    </div>
  )
}

export default HealthPage