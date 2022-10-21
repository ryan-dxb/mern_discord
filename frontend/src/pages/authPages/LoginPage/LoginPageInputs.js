import React from "react";
import InputWithLabel from "../../../components/shared/InputWithLabel";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        setValue={setEmail}
      />
      <InputWithLabel
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
      />
    </>
  );
};

export default LoginPageInputs;
