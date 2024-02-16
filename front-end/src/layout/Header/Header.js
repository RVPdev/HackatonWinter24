import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false); // state variable in charge for scrolling down
  const [buttonActive, setButtonActive] = useState(false); //initialize state for the menu

  // Function to handle scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 15) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // function handle click
  const clickHandler = () => {
    console.log("button clicked")
    console.log(buttonActive)
    setButtonActive(!buttonActive);
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
          <h2>Mental Health App</h2>
        </Link>

        {/* <div className={`menu ${buttonActive ? "activated" : ""}`} id="menu">
          <ul className="list">
            <li className="list-item ">
              <Link className="list-link current anchor" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/">
                Reviews
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/">
                Contact
              </Link>
            </li>
            <li className="list-item screen-lg-hidden">
              <Link className="list-link anchor" to="/">
                Log in
              </Link>
            </li>
            <li className="list-item screen-lg-hidden">
              <Link className="list-link anchor" to="/">
                Sign up
              </Link>
            </li>
          </ul>
        </div> */}
        {/* Division of menu and buttons */}
        <div className="list list-right">
          <button
            className={`btn place-items-center screen-lg-hidden menu-toggle-icon ${
              buttonActive ? "activated" : ""
            } `}
            id="menu-toggle-icon"
            onClick={clickHandler}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button>

          <Link className="list-link screen-sm-hidden anchor" to="/login">
            Log in
          </Link>
          <Link className="list-link screen-sm-hidden btn sign-up-btn anchor" to="signup">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
