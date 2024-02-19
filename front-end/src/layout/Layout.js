
import Footer from "./Footer";
import Header from "./Header/Header";
import Main from "./Main";
import { useState } from "react";

function Layout() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Main loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </>
  );
}

export default Layout;
