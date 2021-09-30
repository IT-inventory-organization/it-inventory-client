import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import WrapSection from "../WrapSection";
import styles from "../../styles/dashboard/index.module.scss";
import LineApproval from "../PLB/LineApproval";

function RecentActivities() {
  return (
    <WrapSection title="Recent Activities">
      <TableContainer style={{ marginTop: "1rem" }}>
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
              <TableCell>
                <LineApproval />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </WrapSection>
  );
}

export default RecentActivities;
