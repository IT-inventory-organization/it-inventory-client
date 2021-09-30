import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import ModalCreate from "../components/PLB/ModalCreate";
import TablePLB from "../components/PLB/TablePLB.js";
import MainLayout from "../layout/MainLayout";

function PLB() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <MainLayout>
      <Grid container my={3}>
        <Paper elevation={0} sx={{ width: "100%" }}>
          <TablePLB handleOpenModal={handleOpenModal} />
        </Paper>
      </Grid>
      <ModalCreate
        open={openModal}
        close={handleCloseModal}
        title={"Create New PLB"}
      />
    </MainLayout>
  );
}

export default PLB;
