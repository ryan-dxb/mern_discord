import React from "react";
import Typography from "@mui/material/Typography";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "white" }}>Sign in to continue</Typography>
    </>
  );
};

export default LoginPageHeader;
