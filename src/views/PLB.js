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
          <EnchancedToolbar handleOpenModal={handleOpenModal} />
          <TableContainer>
            <Table className={styles.simple_table}>
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
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>PLB-BC 2.7</TableCell>
                  <TableCell>10123123213123123452</TableCell>
                  <TableCell>01 Jan 2021</TableCell>
                  <TableCell>1009332434</TableCell>
                  <TableCell>01 Jan 2021</TableCell>
                  <TableCell>1000932332 Avengers</TableCell>
                  <TableCell>Stark Industries</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <ModalCreate open={openModal} close={handleCloseModal} />
    </MainLayout>
  );
}

export default PLB;
