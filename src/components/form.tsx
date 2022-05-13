import React, { FC } from "react";
import { useState } from "react";

interface FormProps {
  title: string;
  handleClick: number;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button>{title}</button>
    </div>
  );
};

export default Form;
