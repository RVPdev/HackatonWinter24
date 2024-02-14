import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Activities from "./Activities";
import Reminder from "./Reminder";
import HowFeeling from "./HowFeeling"

function Register() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="create" />}></Route>
      <Route path="create" element={<CreateAccount />}></Route>
      <Route path="activities" element={<Activities />}></Route>
      <Route path="reminder" element={<Reminder />}></Route>
      <Route path="feeling" element={<HowFeeling />}></Route>
    </Routes>
  );
}

export default Register;
