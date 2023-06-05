import { NavLink, Outlet } from "react-router-dom";

import CenteredMaxWidthBox from "../components/CenteredMaxWidthBox";

export default function ProtectedLayout() {
  return (
    <>
      <nav className="host-navbar app-padding-inline-default">
        <CenteredMaxWidthBox>
          <div className="host-navbar__flexbox">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "btn--underlined" : "")}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="income"
              className={({ isActive }) => (isActive ? "btn--underlined" : "")}
            >
              Income
            </NavLink>
            <NavLink
              to="vans"
              className={({ isActive }) => (isActive ? "btn--underlined" : "")}
            >
              Vans
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? "btn--underlined" : "")}
            >
              Reviews
            </NavLink>
          </div>
        </CenteredMaxWidthBox>
      </nav>
      {/* <div className="app-padding-inline-default">
        <CenteredMaxWidthBox> */}
      <Outlet />
      {/* </CenteredMaxWidthBox>
      </div> */}
    </>
  );
}
