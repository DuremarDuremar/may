import React from "react";
import { Navigate } from "react-router-dom";

import { useTypeSelector } from "../hooks/redux";
import SignUp from "../components/signUp";

const RegisterPage = () => {
  const { token } = useTypeSelector((state) => state.userReducer);

  return (
    <>
      <SignUp />
      <div>RegistrPage</div>
      {token && <Navigate replace to="/" />}
    </>
  );
};

export default RegisterPage;
