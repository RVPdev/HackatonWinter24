import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoNameImage from "./../../assets/LOGOname.png"

function Header({ loggedIn, setLoggedIn}) {
  const [active, setActive] = useState(false); // state variable in charge for scrolling down

  // Function to handle scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 15) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  // Adding the scroll event listener when component mounts and cleaning up when it unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${active ? "activated" : ""}`} id="header">
      <nav className="navbar container">
        <Link to="/" className="logo anchor">
          {/* <h2>Mental Health App</h2> */}
          <div className="logo-name-wrapper"><img className="logo-name-image" src={LogoNameImage} alt="logo"/></div>
        </Link>
        {/* Division of menu and buttons */}
        <div className="list list-right">
          {/* <button
            className={`btn place-items-center screen-lg-hidden menu-toggle-icon ${
              buttonActive ? "activated" : ""
            } `}
            id="menu-toggle-icon"
            onClick={clickHandler}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button> */}

          {!loggedIn ? (
            <>
              <button
                className="list-link screen-sm-hidden anchor"
                onClick={() => navigateTo("/login")}
              >
                LOGIN
              </button>
              <button
                className="list-link screen-sm-hidden btn sign-up-btn anchor"
                onClick={() => navigateTo("/register")}
              >
                SIGN UP
              </button>
            </>
          ) : null}
          {loggedIn ?  <button
                className="list-link screen-sm-hidden btn sign-up-btn anchor"
                onClick={() => {
                  setLoggedIn(false)
                  navigateTo("/")
                }}
              >
                LOG OUT
              </button> : null }
        </div>
      </nav>
    </header>
  );
}

export default Header;
