import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Change to "smooth" if you prefer
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-[84px] xl:pt-[100px]">
        <Outlet />
      </main>

      <Footer />

      <FloatingButtons />
    </div>
  );
}