import React from "react";
import styles from "../styles/dashboard/index.module.scss";

function LineApproval(props) {
  const { approval } = props;

  return (
    <div
      className={styles.line_badge}
      style={{ backgroundColor: approval ? "#3cb774" : "#F27B61" }}
    ></div>
  );
}

LineApproval.defaultProps = {
  approval: false,
};

export default LineApproval;
