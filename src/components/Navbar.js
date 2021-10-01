import React from "react";
import { AppBar, Toolbar, experimentalStyled, Stack } from "@mui/material";
import UserDropdown from "./Navbar/UserDropdown";
import ListsMenu from "./Navbar/ListsMenu";
import MenuSection from "./Navbar/MenuSection";
import styles from "../styles/dashboard/index.module.scss";

export function NavbarComponent() {
  return (
    <>
      <Header
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <img
          className={styles.header_logo_company}
          src={require("../assets/img/logo_kuadran.png").default}
          alt="logo_kuadran"
        />
        <div className={styles.header_title}>IT Inventory</div>
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

const Header = experimentalStyled(Stack)({
  background: "#fff",
  height: `${HEIGHT_APPBAR}px`,
  padding: `0 ${HORIZONTAL_DISTANCE}px`,
});

const NavbarMenu = experimentalStyled(AppBar)({
  backgroundColor: "#312E68",
});

export const Navbar = React.memo(NavbarComponent);
