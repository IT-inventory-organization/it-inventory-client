import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/dashboard/index.module.scss";
import classnames from "classnames";

function MenuSection(props) {
  const { name, path, icon } = props;
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className={classnames(styles.navbar_menu_wrapper)}>
      {icon}
      <Link className={styles.navbar_menu_item} to={path}>
        {name}
      </Link>
      {pathname === path && <div className={styles.navbar_menu_active}></div>}
    </div>
  );
}

export default React.memo(MenuSection);
