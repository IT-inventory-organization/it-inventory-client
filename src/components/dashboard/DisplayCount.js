import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const BoxDisplay = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px 20px",
  borderRadius: "20px",
  color: "#fff",
  alignItems: "center",
  gap: "20px",
}));

const BoxIcon = styled("div")(({ theme }) => ({
  padding: "1rem",
  borderRadius: "20%",
}));

const BodyWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "100%",
  gap: 20,
}));

const DisplayCount = (props) => {
  const { icon, ContainerColor, BoxIconColor, count, name } = props;
  return (
    <BoxDisplay style={{ backgroundColor: ContainerColor }}>
      <div>
        <BoxIcon style={{ backgroundColor: BoxIconColor }}>
          <img src={icon} alt="" />
        </BoxIcon>
      </div>
      <BodyWrapper>
        <Typography style={{ fontWeight: 600 }} variant="body2">
          {name}
        </Typography>
        <Typography style={{ fontWeight: 600 }} variant="h5">
          {count}
        </Typography>
      </BodyWrapper>
    </BoxDisplay>
  );
};

export default DisplayCount;
