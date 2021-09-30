import React from "react";
import { ReactComponent as IconChevron } from "../assets/icons/ic_chevron.svg";
import { styled } from "@mui/system";
import styles from "../styles/dashboard/index.module.scss";

function StyledSelectField({ label, fullWidth, ...other }) {
  return (
    <>
      <InputWrapper style={{ width: fullWidth ? "100%" : "max-content" }}>
        {label && <BootstrapLabel>{label}</BootstrapLabel>}
        <div className={styles.bootstrap_wrapper_select}>
          <select placeholder="asdsadsad" icon={<IconChevron />}>
            <option style={{ color: "pink" }}>Pilih Option</option>
          </select>
          <div className={styles.bootstrap_wrapper_select_icon}>
            <IconChevron />
          </div>
        </div>
      </InputWrapper>
    </>
  );
}

export default React.memo(StyledSelectField);

const InputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const BootstrapLabel = styled("label")({
  fontSize: ".9rem",
  marginBottom: ".8rem",
  color: "#000",
});

StyledSelectField.defaultProps = {
  fullWidth: true,
};
