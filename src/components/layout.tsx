import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
