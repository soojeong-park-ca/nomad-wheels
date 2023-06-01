import { useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import AppContext from "../store/app-context";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { publishCustomEvent } from "../utils/eventListeners";

import LoginIcon from "./LoginIcon";
import LogoutIcon from "./LogoutIcon";

export default function Header() {
  const appCtx = useContext(AppContext);

  const [isLoggedIn] = useLocalStorage("loggedin", null);
  console.log("Header: ", isLoggedIn);

  // Close nav with ESC key
  window.addEventListener("keydown", e => {
    if (appCtx.navOpen && e.key === "Escape") appCtx.onEscPress();
  });

  // Close nav when nav-overlay clicked
  const handleOverlayClick = e => {
    e.target.classList.contains("overlay") &&
      !e.target.classList.contains("mobile-nav") &&
      appCtx.onOverlayClick();
  };

  // Mobile nav or Desktop nav depending on window size
  useEffect(() => {
    window.addEventListener("resize", () => appCtx.onWindowResize());
  }, [window.innerWidth]);

  // Fake logout
  const logoutHandler = () => {
    const key = "loggedin";
    const newValue = JSON.stringify(false);
    const key2 = "userData";
    const newValue2 = JSON.stringify(null);

    localStorage.setItem(key, newValue);
    publishCustomEvent("logout", { key, newValue });
    localStorage.setItem(key2, newValue2);
    publishCustomEvent("logout", { key2, newValue2 });
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
        onClick={() => appCtx.onCloseMobileNav()}
      >
        <div>Home</div>
      </NavLink>
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="about"
        onClick={() => appCtx.onCloseMobileNav()}
      >
        <div>About</div>
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "mobile-nav-link mobile-nav-link--active"
            : "mobile-nav-link"
        }
        to="vans"
        onClick={() => appCtx.onCloseMobileNav()}
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
        onClick={() => appCtx.onCloseMobileNav()}
      >
        <div>Host</div>
      </NavLink>
    </>
  );

  const displayMobileNav = (
    <>
      <button
        className="mobile-nav-btn"
        onClick={() => appCtx.onMobileMenuClick()}
      >
        {!appCtx.navOpen ? (
          <i className="fa-solid fa-bars menu-icon"></i>
        ) : (
          <i className="fa-solid fa-xmark menu-icon"></i>
        )}
      </button>
      <nav
        className={`mobile-nav ${
          appCtx.navOpen ? "mobile-nav--open" : "mobile-nav--closed"
        }`}
      >
        {navigationElements}
        {!isLoggedIn ? (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link mobile-nav-link--active"
                : "mobile-nav-link"
            }
            to="login"
            onClick={() => appCtx.onCloseMobileNav()}
          >
            <div>Sign in</div>
          </NavLink>
        ) : (
          <Link
            className="mobile-nav-link"
            to="login"
            onClick={() => {
              appCtx.onCloseMobileNav();
              logoutHandler();
            }}
          >
            <div>Sign out</div>
          </Link>
        )}
      </nav>
    </>
  );

  const displayDesktopNav = (
    <nav className="desktop-nav">
      {navigationElements}
      {!isLoggedIn ? (
        <Link to="login">
          <div>
            <LoginIcon className="login-icon" />
          </div>
        </Link>
      ) : (
        <Link to="login" onClick={() => logoutHandler()}>
          <div>
            <LogoutIcon className="logout-icon" />
          </div>
        </Link>
      )}
    </nav>
  );

  return (
    <>
      <header className="header app-padding-inline-default">
        <div className="navbar max-width center-hori">
          <Link
            className="btn-logo btn-home"
            to="/"
            onClick={() => appCtx.onCloseMobileNav()}
          >
            <i className="fa-solid fa-van-shuttle logo-icon"></i> Nomad Wheels
          </Link>
          {appCtx.mobile ? displayMobileNav : displayDesktopNav}
        </div>
      </header>

      {appCtx.mobile && (
        <div
          className={`overlay ${!appCtx.navOpen ? "hidden" : ""}`}
          onClick={handleOverlayClick}
        ></div>
      )}
    </>
  );
}
