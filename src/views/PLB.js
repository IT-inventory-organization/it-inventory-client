import {
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import EnchancedToolbar from "../components/EnchancedToolbar";
import ModalCreate from "../components/PLB/ModalCreate";
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
      <Grid container mt={3}>
        <Paper elevation={0} sx={{ width: "100%" }}>
          <EnchancedToolbar handleOpenModal={handleOpenModal} />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Jenis Inventory</TableCell>
                  <TableCell>Nomor Ajuan</TableCell>
                  <TableCell>Tanggal Ajuan</TableCell>
                  <TableCell>No.Daftar</TableCell>
                  <TableCell>Tanggal Daftar</TableCell>
                  <TableCell>Pengirim</TableCell>
                  <TableCell>Penerima</TableCell>
                  <TableCell>Jalur</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <ModalCreate open={openModal} close={handleCloseModal} />
    </MainLayout>
  );
}

export default PLB;
