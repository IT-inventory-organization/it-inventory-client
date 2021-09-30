import React from "react";
import styles from "../../styles/dashboard/index.module.scss";

const DisplayCount = (props) => {
  const { icon, ContainerColor, BoxIconColor, count, name } = props;
  return (
    <div
      className={styles.box_count_wrapper}
      style={{ backgroundColor: ContainerColor }}
    >
      <div>
        <div
          className={styles.box_count_icon}
          style={{ backgroundColor: BoxIconColor }}
        >
          {/* <img src={icon} alt="" /> */}
          {icon}
        </div>
      </div>
      <div className={styles.box_count_content}>
        <div className={styles.box_count_content_name}>{name}</div>
        <div className={styles.box_count_content_number}>{count}</div>
      </div>
    </div>
  );
};

export default DisplayCount;
