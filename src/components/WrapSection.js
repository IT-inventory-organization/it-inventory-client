import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Box = styled("div")(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: "#ffffff",
  width: "100%",
  padding: "30px",
}));

function WrapSection(props) {
  const { children, title } = props;
  return (
    <Box>
      <Typography style={{ fontWeight: 600 }}>{title}</Typography>
      {children}
    </Box>
  );
}

export default WrapSection;
