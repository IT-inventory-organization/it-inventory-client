import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  experimentalStyled,
  Avatar,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import UserDropdown from "./Navbar/UserDropdown";
import ListsMenu from "./Navbar/ListsMenu";
import MenuSection from "./Navbar/MenuSection";

function Navbar() {
  return (
    <>
      <Header
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <LogoCompany
          src={require("../assets/img/logo_kuadran.png").default}
          alt="logo_kuadran"
        />
        <TitleApp>IT Inventory</TitleApp>
        <UserDropdown />
      </Header>
      <NavbarMenu position="sticky">
        <Toolbar>
          {ListsMenu.map((item, index) => {
            return (
              <MenuSection
                key={index.toString()}
                name={item.name}
                path={item.path}
                icon={item.icon}
              />
            );
          })}
        </Toolbar>
      </NavbarMenu>
    </>
  );
}

const HEIGHT_APPBAR = 80;
const HORIZONTAL_DISTANCE = 40;
const VERTICAL_DISTANCE = 20;

const Header = experimentalStyled(Stack)({
  background: "#fff",
  height: `${HEIGHT_APPBAR}px`,
  padding: `0 ${HORIZONTAL_DISTANCE}px`,
});

const LogoCompany = styled("img")(({ theme }) => ({
  width: "120px",
}));

const TitleApp = experimentalStyled(Typography)({
  fontWeight: "700",
  fontSize: "2rem",
  userSelect: "none",
});

const NavbarMenu = experimentalStyled(AppBar)({
  backgroundColor: "#312E68",
});

export default Navbar;
