import { Outlet } from "react-router-dom";

import AppProvider from "../store/AppProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
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
