import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import LogoNameImage from "./../../assets/LOGOname.png";

function Header({ loggedIn, setLoggedIn }) {
  const [active, setActive] = useState(false); // state variable in charge for scrolling down

  const location = useLocation();
  const isDashboardPath = location.pathname.includes("/employees/");

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
          <div className="logo-name-wrapper">
            <img className="logo-name-image" src={LogoNameImage} alt="logo" />
          </div>
        </Link>
        {/* Division of menu and buttons */}
        <div className="list list-right">
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
          {loggedIn ? (
            <>
              <button
                className="list-link screen-sm-hidden btn sign-up-btn anchor"
                onClick={() => {
                  localStorage.removeItem("token");
                  setLoggedIn(false);
                  navigateTo("/");
                }}
              >
                LOG OUT
              </button>
              {!isDashboardPath ? (
                <button
                  className="list-link screen-sm-hidden btn sign-up-btn anchor"
                  onClick={() => {
                    navigateTo(`/employees/${loggedIn.user_id}`);
                  }}
                >
                  DASHBOARD
                </button>
              ) : null}
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Header;
