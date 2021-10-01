import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/dashboard/index.module.scss";
import classnames from "classnames";

function MenuSection(props) {
  const { name, path, icon, ...other } = props;

  return (
    <div className={classnames(styles.navbar_menu_wrapper)}>
      <NavLink
        {...other}
        className={styles.navbar_menu_item}
        to={path}
        activeClassName={styles.navbar_menu_item_active}
      >
        {icon}
        {name}
      </NavLink>
      {/* <HandleActive /> */}
    </div>
  );
}

export default MenuSection;
