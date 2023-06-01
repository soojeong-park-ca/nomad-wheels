import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import AppProvider from "../store/AppProvider";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <AppProvider>
      <div className="siteWrapper">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
