import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import Employees from "./Employees";
import Admin from "./Admin";
import NotFound from "./Page_not_found";
import Home from "./Home/Home";
import Register from "./Register/Register";

function Main() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/employees/*" element={<Employees />} />
        <Route path="/employees/:employeeId" element={<Employee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
