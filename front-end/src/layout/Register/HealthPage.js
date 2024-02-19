import HealthForm from "./HealthForm"
import { Navigate, useLocation } from "react-router-dom";

function HealthPage({loggedIn}) {
  
  const location = useLocation();
  const user_id = location?.state?.user_id;

  if(!loggedIn || !user_id) {
    return <Navigate to="/register" replace />
  }

  return (
    <div>
        <HealthForm />
    </div>
  )
}

export default HealthPage