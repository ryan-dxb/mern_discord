import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/shared/AuthBox";
import { validateLoginForm } from "../../../utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { useDispatch } from "react-redux";
import { login } from "../../../store/auth/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    const data = { email, password };
    dispatch(login(data));
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
