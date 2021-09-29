import { Dialog, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .MuiPaper-root {
    padding: 20px;
    border-radius: 20px;
    box-shadow: none;
    top: -30%;
    max-width: 1120px;
  }
`;

function ModalCreate(props) {
  const { open, close } = props;
  return (
    <StyledDialog fullWidth open={open} onClose={() => close()}>
      <Typography variant="h6">Create New PLB</Typography>
    </StyledDialog>
  );
}

export default ModalCreate;
