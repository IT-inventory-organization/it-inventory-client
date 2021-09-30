import React from "react";
import styles from "../../styles/dashboard/index.module.scss";

function LineApproval(props) {
  const { approval } = props;
  return (
    <div
      className={styles.line_badge}
      style={{ backgroundColor: approval ? "#3cb774" : "#DE3D33" }}
    ></div>
  );
}

LineApproval.defaultProps = {
  approval: false,
};

export default LineApproval;
