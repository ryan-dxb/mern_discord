import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: 600,
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid #b9bbbe",
  color: "#dcddde",
  backgroundColor: "#35393F",
  borderRadius: "5px",
  padding: "0 5px",
  fontSize: "16px",
});

const InputWithLabel = ({ value, setValue, label, type, placeholder }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
