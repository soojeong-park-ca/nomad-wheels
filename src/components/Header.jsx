import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

// import LoginIcon from "./LoginIcon";
// import LogoutIcon from "./LogoutIcon";

export default function Header() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [navOpen, setNavOpen] = useState(false);

  const [isLoggedIn] = useLocalStorage("loggedin", null);
  console.log("Header: ", isLoggedIn);

  // Open / Close mobile nav state
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

  // Mobile nav or Desktop nav depending on window size
  useEffect(() => {
    function handleWindowResize() {
      setMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);

  // Fake logout
  const logoutHandler = () => {
    const key = "loggedin";
    const newValue = JSON.stringify(false);

    localStorage.setItem(key, newValue);
    publishEvent("login", { key, newValue });
  };

  const navigationElements = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="."
        onClick={() => setNavOpen(false)}
      >
        <div>Home</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="about"
        onClick={() => setNavOpen(false)}
      >
        <div>About</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="vans"
        onClick={() => setNavOpen(false)}
      >
        <div>Vans</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="host"
        onClick={() => setNavOpen(false)}
      >
        <div>Host</div>
      </NavLink>

      {!isLoggedIn ? (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mobile-nav-link mobile-nav-link--active"
              : "mobile-nav-link"
          }
          to="login"
          onClick={() => setNavOpen(false)}
        >
          <div>Sign in</div>
        </NavLink>
      ) : (
        <Link
          className="mobile-nav-link"
          to="login"
          onClick={() => {
            setNavOpen(false);
            logoutHandler();
          }}
        >
          <div>Sign out</div>
        </Link>
      )}
    </>
  );

  const displayMobileNav = (
    <>
      <button className="mobile-nav-btn" onClick={navToggleHandler}>
        {!navOpen ? (
          <i className="fa-solid fa-bars menu-icon"></i>
        ) : (
          <i className="fa-solid fa-xmark menu-icon"></i>
        )}
      </button>
      <nav
        className={`mobile-nav ${
          navOpen ? "mobile-nav--open" : "mobile-nav--closed"
        }`}
      >
        {navigationElements}
      </nav>
    </>
  );

  const displayDesktopNav = (
    <nav className="desktop-nav">{navigationElements}</nav>
  );

  return (
    <>
      <header className="header">
        <Link className="btn-logo btn-home" to="/">
          <i className="fa-solid fa-van-shuttle logo-icon"></i> VanVenture
        </Link>
        {mobile ? displayMobileNav : displayDesktopNav}
      </header>

      {mobile && (
        <div
          className={`overlay ${!navOpen ? "hidden" : ""}`}
          onClick={handleOverlayClick}
        ></div>
      )}
    </>
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
