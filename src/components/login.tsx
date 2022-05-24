import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux";
import Form from "./form";

const Login = () => {
  const dispatch = useTypeDispatch();

  const { email, token, id } = useTypeSelector((state) => state.userReducer);

  const handleLogin = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <Form handleClick={handleLogin} title="login" />;
};

export default Login;
