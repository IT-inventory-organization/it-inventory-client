import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {} from "@mui/system";
import React from "react";
import PillBadge from "../PillBadge";
import WrapSection from "../WrapSection";

function RecentActivities() {
  return (
    <WrapSection title="Recent Activities">
      <TableContainer style={{ marginTop: "1rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama Perusahaan</TableCell>
              <TableCell>Jenis Kegiatan</TableCell>
              <TableCell>Kategori Barang</TableCell>
              <TableCell>Uraian</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Kuadran</TableCell>
              <TableCell>Import</TableCell>
              <TableCell>
                <PillBadge text="Mesin & Peralatan" />
              </TableCell>
              <TableCell>Lensa Kamera</TableCell>
              <TableCell>100</TableCell>
              <TableCell>04 Jan 2021</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kuadran</TableCell>
              <TableCell>Import</TableCell>
              <TableCell>
                <PillBadge text="Mesin & Peralatan" />
              </TableCell>
              <TableCell>Lensa Kamera</TableCell>
              <TableCell>100</TableCell>
              <TableCell>04 Jan 2021</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </WrapSection>
  );
}

export default RecentActivities;
