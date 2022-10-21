import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../../components/shared/CustomPrimaryButton";
import RedirectInfo from "../../../components/shared/RedirectInfo";
import Tooltip from "@mui/material/Tooltip";

const getFormNotValidMessage = () => {
  return "Please fill all the fields";
};

const getFormValidMessage = () => {
  return "Click to login";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleLogin}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleRedirect}
      />
    </>
  );
};

export default LoginPageFooter;
