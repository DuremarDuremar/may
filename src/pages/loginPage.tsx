import React from "react";
import { Navigate } from "react-router-dom";

import { useTypeSelector } from "../hooks/redux";
import Login from "../components/login";

const LoginPage = () => {
  const { token } = useTypeSelector((state) => state.userReducer);

  return (
    <>
      <Login />
      <div>LoginPage</div>
      {token && <Navigate replace to="/" />}
    </>
  );
};

export default LoginPage;
