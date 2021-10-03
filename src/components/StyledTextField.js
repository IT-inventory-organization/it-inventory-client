import {
  TextField as MuiTextField,
  InputLabel as MuiInputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

function StyledTextField(props) {
  const { label, ...other } = props;
  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <TextField {...other} />
    </>
  );
}

export default React.memo(StyledTextField);

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  // color: "black",
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  ".MuiOutlinedInput-root": {
    fontSize: 16,
    width: "auto",
    borderRadius: 10,

    "& > fieldset": {
      border: "1px solid #D8DCF2",
    },
  },
  ".MuiInputBase-input": {
    padding: "10px 12px",
  },
}));
