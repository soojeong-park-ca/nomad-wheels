import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Login from "./pages/Login";

import ProtectedLayout from "./layout/ProtectedLayout";
import Dashboard from "./pages/Host/Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="login" element={<Login />} />

        <Route path="host" element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
