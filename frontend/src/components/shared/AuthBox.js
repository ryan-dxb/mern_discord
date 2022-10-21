import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  display: "flex",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#5865F2",
});

const AuthBox = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: "auto",
          bgcolor: "#36393F",
          borderRadius: "5px",
          boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
