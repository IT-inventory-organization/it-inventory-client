import { experimentalStyled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkWrapper = experimentalStyled("div")({
  width: "200px",
  textAlign: "center",
});

const LinkItem = experimentalStyled(Link)({
  color: "#8D8AC7",
  textDecoration: "none",
});

function MenuSection(props) {
  const { name, path, icon } = props;
  return (
    <LinkWrapper>
      <LinkItem to={path}>{name}</LinkItem>
    </LinkWrapper>
  );
}

export default MenuSection;
