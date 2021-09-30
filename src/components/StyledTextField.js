import { alpha, styled } from "@mui/system";
import React from "react";

function StyledTextField({ label, fullWidth, ...other }) {
  return (
    <InputWrapper style={{ width: fullWidth ? "100%" : "max-content" }}>
      {label && <BootstrapLabel>{label}</BootstrapLabel>}
      <BootstrapInput {...other} />
    </InputWrapper>
  );
}

export default React.memo(StyledTextField);

// Styled Component
const InputWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const BootstrapLabel = styled("label")(({ theme }) => ({
  fontSize: "1rem",
  color: "#000",
  marginBottom: theme.spacing(2),
}));

const BootstrapInput = styled("input")(({ theme }) => ({
  width: "100%",
  borderRadius: "10px",
  border: "1px solid #D8DCF2",
  outline: "none",
  fontSize: 16,
  position: "relative",
  boxSizing: "border-box",
  padding: "10px 12px",
  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),
  "*::placeholder": {
    color: "#8d8ac7",
    opacity: 1,
  },
  "&:focus": {
    boxShadow: `${alpha("#0C66CF", 0.25)} 0 0 0 0.2rem`,
    borderColor: "#0C66CF",
  },
}));

StyledTextField.defaultProps = {
  fullWidth: true,
};
