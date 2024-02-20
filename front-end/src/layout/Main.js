import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import Admin from "./Admin/Admin";
import NotFound from "./Page_not_found";
import Home from "./Home/Home";
import Register from "./Register/Register";


function Main({loggedIn, setLoggedIn}) {


  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register/*" element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/employees/:userId" element={<Employee loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
