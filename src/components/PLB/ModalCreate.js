import React from "react";
import { Dialog, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as IcCancelX } from "../../assets/icons/ic_cancelx.svg";
import styles from "../../styles/dashboard/index.module.scss";
import FormCreate from "./FormCreate";

function ModalCreate(props) {
  const { open, close, title } = props;
  return (
    <StyledDialog fullWidth open={open} onClose={() => close()}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography variant="h6">{title}</Typography>
        <IcCancelX
          onClick={() => close()}
          className={styles.modal_create_btn_close}
        />
      </Stack>
      <div style={{ marginTop: "20px", padding: "30px 0" }}>
        <FormCreate />
      </div>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .MuiPaper-root {
    padding: 20px 30px;
    border-radius: 20px;
    box-shadow: none;
    /* top: -10%; */
    max-width: 1120px;
  }
`;

export default ModalCreate;
