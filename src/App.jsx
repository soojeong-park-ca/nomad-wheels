import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Vans from "./pages/Vans";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import ProtectedLayout from "./layout/ProtectedLayout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";

import NotFound from "./components/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vans" element={<Vans />} />
      <Route path="reviews" element={<Reviews />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="host" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
