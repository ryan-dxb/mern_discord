import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../../components/shared/CustomPrimaryButton";
import RedirectInfo from "../../../components/shared/RedirectInfo";
import Tooltip from "@mui/material/Tooltip";

const getFormNotValidMessage = () => {
  return "Please fill all the fields";
};

const getFormValidMessage = () => {
  return "Click to Register";
};

const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleRegister}
            disabled={!isFormValid}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Have an account?"
        redirectText="Sign in to your account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleRedirect}
      />
    </>
  );
};

export default RegisterPageFooter;
