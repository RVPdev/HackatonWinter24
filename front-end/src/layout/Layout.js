
import Footer from "./Footer";
import Header from "./Header/Header";
import Main from "./Main";
import { useEffect, useState } from "react";

function Layout() {

  const [loggedIn, setLoggedIn] = useState()

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    if(token) {
      setLoggedIn(token)
    }
  }, [])

  return (
    <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Main loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </>
  );
}

export default Layout;
