import React from "react";
import { LinearProgress } from "@mui/material";
import { styled, alpha } from "@mui/system";

const BoxProgress = styled("div")(({ theme }) => ({}));

const InfoProgress = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
}));

const Label = styled("div")(({ theme }) => ({
  color: "#8D8AC7",
}));

const BadgeCount = styled("div")(({ theme }) => ({
  backgroundColor: alpha("#00CE9F", 0.1),
  padding: "4px 5px",
  borderRadius: "50px",
  color: "#3CB774",
  fontSize: "0.8rem",
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
}));

const LinearProgessStyle = {
  height: "10px",
};

function LinearProgressWithLable(props) {
  const { year, percent, style } = props;

  function handleIcon() {
    return require("../../assets/icons/ic_arrow_data_up.svg").default;
  }

  return (
    <BoxProgress>
      <InfoProgress>
        <Label>{year}</Label>
        <BadgeCount>
          <img src={handleIcon()} alt="" />
          {"  "}+{percent}%
        </BadgeCount>
      </InfoProgress>
      <LinearProgress
        style={LinearProgessStyle}
        color="success"
        variant="determinate"
        {...props}
      />
    </BoxProgress>
  );
}

export default LinearProgressWithLable;
