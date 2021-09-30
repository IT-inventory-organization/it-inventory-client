import React from "react";
import { LinearProgress } from "@mui/material";
import styles from "../../styles/dashboard/index.module.scss";
import classnames from "classnames";

function LinearProgressWithLable(props) {
  const { year, percent, ...other } = props;

  function handleIcon() {
    return require("../../assets/icons/ic_arrow_data_up.svg").default;
  }

  return (
    <div>
      <div className={styles.info_progress}>
        <div className={styles.info_progress_label}>{year}</div>
        <div
          className={classnames(
            styles.info_progress_badge_count,
            styles.info_progress_badge_count_up
          )}
        >
          <img src={handleIcon()} alt="" />
          {"  "}+{percent}%
        </div>
      </div>
      <LinearProgress
        className={styles.info_progress_bar_up}
        variant="determinate"
        {...other}
      />
    </div>
  );
}

export default LinearProgressWithLable;
