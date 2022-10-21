import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{
        color: "#72767D",
      }}
      variant="subtitle2"
      style={additionalStyles ? additionalStyles : {}}
    >
      {text}{" "}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
