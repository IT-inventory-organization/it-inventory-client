import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Pill = styled("div")(({ theme }) => ({
  borderRadius: "50px",
  border: "1px solid black",
  textAlign: "center",
  width: "max-content",
  padding: "5px 10px",
}));

function PillBadge(props) {
  let { text, color, ...other } = props;

  return (
    <Pill style={{ border: `1px solid ${color}` }} {...other}>
      <Typography style={{ color: color }} variant="body2">
        {text}
      </Typography>
    </Pill>
  );
}

PillBadge.defaultProps = {
  color: "#3CB774",
  text: "text",
};

export default PillBadge;
