import {
  Autocomplete,
  InputLabel as MuiInputLabel,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

function StyledAutoCompletedField(props) {
  const { label, ...other } = props;
  return (
    <>
      <Autocomplete
        disablePortal
        freeSolo
        id="combo-box-demo"
        autoHighlight
        autoSelect
        options={top100Films}
        renderInput={(params) => (
          <>
            {label && <InputLabel>{label}</InputLabel>}
            <TextField {...params} />
          </>
        )}
        getOptionLabel={(option) => `${option.name}`}
        renderOption={(props, option) => {
          return (
            <Typography
              {...props}
            >{`${option.name} - ${option.year}`}</Typography>
          );
        }}
        {...other}
      />
    </>
  );
}

const TextField = styled(MuiTextField)(({ theme }) => ({
  ".MuiOutlinedInput-root": {
    fontSize: 16,
    width: "auto",
    padding: "3px 12px",
    borderRadius: 10,
    "& > fieldset": {
      border: "1px solid #D8DCF2",
    },
  },
  "label + &": {
    marginTop: theme.spacing(2),
  },
}));

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  color: "black",
}));

const top100Films = [
  { name: "The Shawshank Redemption", year: 1994 },
  { name: "The Godfather", year: 1972 },
  { name: "The Godfather: Part II", year: 1974 },
];

export default React.memo(StyledAutoCompletedField);
