import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const shouldRedirect = false;

  return (
    <>
      <h2>About</h2>
      {!shouldRedirect && <Navigate replace to="login" />}
    </>
  );
};

export default HomePage;
