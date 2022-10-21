import React from "react";
import InputWithLabel from "../../../components/shared/InputWithLabel";

const RegisterPageInputs = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        label="Email"
        value={email}
        setValue={setEmail}
        type="email"
      />
      <InputWithLabel
        label="Username"
        value={username}
        setValue={setUsername}
        type="text"
      />
      <InputWithLabel
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
      />
    </>
  );
};

export default RegisterPageInputs;
