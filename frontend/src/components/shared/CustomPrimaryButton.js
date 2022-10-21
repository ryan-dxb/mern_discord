import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({
  label,
  disabled,
  onClick,
  additionalStyles,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865F2",
        color: "#fff",
        textTransform: "none",
        fonsSize: "16px",
        fontWeight: 600,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
