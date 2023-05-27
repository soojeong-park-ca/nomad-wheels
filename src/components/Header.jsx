import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import LoginIcon from "./LoginIcon";
import LogoutIcon from "./LogoutIcon";

export default function Header() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [navOpen, setNavOpen] = useState(false);
  // const activeStyles = {
  //   color: "var(--color-text-default)",
  //   fontWeight: "600",
  //   textDecoration: "underline",
  //   textUnderlineOffset: "3px",
  //   border: "none",
  // };

  // function fakeLogOut() {
  //   // fake logout
  // }

  function navToggleHandler() {
    setNavOpen(prevState => !prevState);
  }

  // Close nav with ESC key
  const handleEscPress = e => {
    if (navOpen && e.key === "Escape") setNavOpen(false);
  };
  window.addEventListener("keydown", handleEscPress);

  // Close nav when nav-overlay clicked
  const handleOverlayClick = e => {
    e.target.classList.contains("overlay") &&
      !e.target.classList.contains("mobile-nav") &&
      setNavOpen(false);
  };

  useEffect(() => {
    function handleWindowResize() {
      setMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);

  return (
    <div className="header-wrapper">
      <header className="header">
        <Link className="btn-logo btn-home" to="/">
          <i className="fa-solid fa-van-shuttle logo-icon"></i> VanVenture
        </Link>
        {mobile ? (
          <button className="mobile-nav-btn" onClick={navToggleHandler}>
            <i className="fa-solid fa-bars menu-icon"></i>
          </button>
        ) : (
          <nav className="desktop-nav">
            <NavLink to="/login">Login</NavLink>
          </nav>
        )}
      </header>

      <div></div>

      {mobile && (
        <>
          <div
            className={`overlay ${!navOpen && "hidden"}`}
            onClick={handleOverlayClick}
          ></div>
          <nav
            className={`mobile-nav ${
              navOpen ? "mobile-nav--open" : "mobile-nav--closed"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-nav-link--active"
                  : "mobile-nav-link"
              }
              to="/about"
            >
              <div>About</div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-nav-link--active"
                  : "mobile-nav-link"
              }
              to="/vans"
            >
              <div>Vans</div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link mobile-nav-link--active"
                  : "mobile-nav-link"
              }
              to="/login"
            >
              <div>Login</div>
            </NavLink>
          </nav>
        </>
      )}
    </div>
  );
}

/*

<div className={`navbar ${props.className || ""}`}>{props.children}</div>

        <NavLink className="btn-login" to="/login">
          <LoginIcon className="login-icon" />
        </NavLink>

        <button className="btn-logout">
          <LogoutIcon className="logout-icon" />
        </button>
*/
