import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import ProtectedLayout from "./layout/ProtectedLayout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";

import Error from "./components/Error";

// import { requireAuth } from "./utils/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="host" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
