import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./components/VanDetail";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import ProtectedLayout from "./layout/ProtectedLayout";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";

import NotFound from "./components/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="host" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        {/* <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request, loginCtx)}
        /> */}
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        {/* <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader(loginCtx)}
            errorElement={<Error />}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async ({ request }) =>
                await requireAuth(request, loginCtx)
              }
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async ({ request }) =>
                await requireAuth(request, loginCtx)
              }
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async ({ request }) =>
                await requireAuth(request, loginCtx)
              }
            /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
