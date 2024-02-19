import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import More from "./More";
import Reminder from "./Reminder";
import HealthPage from "./HealthPage";



function Register({loggedIn, setLoggedIn}) {  

  return (
    <Routes>
      <Route path="/" element={<Navigate to="create" />}></Route>
      <Route path="create" element={<CreateAccount loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="more" element={<More loggedIn={loggedIn} />}></Route>
      <Route path="reminder" element={<Reminder loggedIn={loggedIn}/>}></Route>
      <Route path="mental" element={<HealthPage loggedIn={loggedIn}/>}></Route>
    </Routes>
  );
}

export default Register;
