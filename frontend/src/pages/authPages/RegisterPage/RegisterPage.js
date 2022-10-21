import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/shared/AuthBox";
import { validateRegisterForm } from "../../../utils/validators";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("regoster");
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;
