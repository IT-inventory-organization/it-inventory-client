import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import ModalForm from "../../components/ModalForm";
import TablePLB from "../../components/PLB/TablePLB.js";
import MainLayout from "../../layout/MainLayout";
import FormCreate from "../../components/PLB/FormCreate";
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
        <Paper elevation={0} sx={{ width: "100%", padding: "20px" }}>
          <TablePLB handleOpenModal={handleOpenModal} />
        </Paper>
        <ModalForm
          open={openModal}
          close={handleCloseModal}
          title={"Create New"}
        >
          <FormCreate />
        </ModalForm>
      </Grid>
    </MainLayout>
  );
}

export default PLB;
