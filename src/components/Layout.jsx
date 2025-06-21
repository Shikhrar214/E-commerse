import React from "react";
import { Outlet, useLocation } from "react-router";
import { Footer, Header } from "../index.js";

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; //ture

  return (
    <div>
      {!isLoginPage && <Header />}

      <Outlet />

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default Layout;
