import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserCredential } from "firebase/auth";

import { useTypeDispatch, useTypeSelector } from "../hooks/redux";
import Form from "./form";
import { userSlice } from "../store/reducer";

const SignUp = () => {
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();

  const { email, token, id } = useTypeSelector((state) => state.userReducer);

  const handleReg = (email: string, password: string) => {
    console.log(password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res: UserCredential) => {
        console.log(res);
        dispatch(
          userSlice.actions.setUser({
            email: res.user.email,
            id: res.user.uid,
            token: res.user.refreshToken,
          })
        );
        navigate("/home");
      })
      .catch(console.error);
  };

  return <Form handleClick={handleReg} title="login" />;
};

export default SignUp;
