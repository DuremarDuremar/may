import React from "react";
import { Navigate } from "react-router-dom";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux";

const HomePage = () => {
  // const shouldRedirect = false;

  const { token } = useTypeSelector((state) => state.userReducer);

  return (
    <>
      <h2>About</h2>
      {!token && <Navigate replace to="login" />}
    </>
  );
};

export default HomePage;
