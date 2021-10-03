import { Grid, Stack } from "@mui/material";
import React from "react";
import StyledTextField from "../../../StyledTextField";
import StyledSelectField from "../../../StyledSelectField";
import StyledAutoCompletedField from "../../../StyledAutoCompletedField";
function DataPengajuan(props) {
  const { formik } = props;
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6} lg={6}>
        <Stack gap={2}>
          <StyledAutoCompletedField label="Kantor Pabean Asal" />
          <StyledSelectField label="Kategori Pemberitahuan" />
          <StyledTextField
            name="kategoryPengeluaran"
            onChange={formik.handleChange}
            label="Kategori Pengeluaran"
          />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <Stack gap={2}>
          <StyledTextField label="Tujuan Pengeluaran" />
          <StyledTextField name="asalBarang" label="Asal Barang" />
          <StyledTextField name="caraPembayaran" label="Cara Pembayaran" />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default React.memo(DataPengajuan);
