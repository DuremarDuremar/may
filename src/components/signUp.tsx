import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux";
import Form from "./form";

const SignUp = () => {
  const dispatch = useTypeDispatch();

  const { email, token, id } = useTypeSelector((state) => state.userReducer);

  const handleReg = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <Form handleClick={handleReg} title="login" />;
};

export default SignUp;
