import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux";
import Form from "./form";

const SignUp = () => {
  const dispatch = useTypeDispatch();

  const { email, token, id } = useTypeSelector((state) => state.userReducer);

  const handleReg = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <Form handleClick={handleReg} title="login" />;
};

export default SignUp;
