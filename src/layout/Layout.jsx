import { useOutlet, redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return redirect("host");
  }

  return (
    <div className="siteWrapper">
      <Header />
      <main className="main">{outlet}</main>
      <Footer />
    </div>
  );
}
