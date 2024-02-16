import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import More from "./More";
import Reminder from "./Reminder";
import HealthPage from "./HealthPage";


function Register() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="create" />}></Route>
      <Route path="create" element={<CreateAccount />}></Route>
      <Route path="more" element={<More />}></Route>
      <Route path="reminder" element={<Reminder />}></Route>
      <Route path="mental" element={<HealthPage />}></Route>
    </Routes>
  );
}

export default Register;
