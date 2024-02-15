import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Activities from "./More";
import Reminder from "./Reminder";

function Register() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="create" />}></Route>
      <Route path="create" element={<CreateAccount />}></Route>
      <Route path="more" element={<Activities />}></Route>
      <Route path="reminder" element={<Reminder />}></Route>
    </Routes>
  );
}

export default Register;
