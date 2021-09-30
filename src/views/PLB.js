import {
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import EnchancedToolbar from "../components/EnchancedToolbar";
import ModalCreate from "../components/PLB/ModalCreate";
import TablePLB from "../components/PLB/TablePLB.js";
import MainLayout from "../layout/MainLayout";
import styles from "../styles/dashboard/index.module.scss";

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
      <Grid container mt={3}>
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
