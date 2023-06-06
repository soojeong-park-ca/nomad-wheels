import { NavLink, Outlet } from "react-router-dom";

import PageNav from "../components/PageNav";

export default function ProtectedLayout() {
  return (
    <>
      <PageNav>
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
      </PageNav>

      <Outlet />
    </>
  );
}
