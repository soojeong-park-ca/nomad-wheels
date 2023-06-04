import { NavLink, Outlet } from "react-router-dom";

import CenteredMaxWidthBox from "../components/CenteredMaxWidthBox";

export default function ProtectedLayout() {
  const activeStyles = {
    color: "v.$color-black",
    fontWeight: "700",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    border: "none",
  };

  return (
    <>
      <nav className="host-navbar">
        <CenteredMaxWidthBox>
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Reviews
          </NavLink>
        </CenteredMaxWidthBox>
      </nav>
      <CenteredMaxWidthBox>
        <Outlet />
      </CenteredMaxWidthBox>
    </>
  );
}
