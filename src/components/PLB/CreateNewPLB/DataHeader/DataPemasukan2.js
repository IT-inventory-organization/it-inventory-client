import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledSelectField from "../../../StyledSelectField";
import StyledTextField from "../../../StyledTextField";

function DataPemasukan2() {
  return (
    <>
      <Typography variant="h6" style={{ margin: "1em 0" }}>
        Data Pelabuhan Muat Bongkar
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Pelabuhan Muat" />
            <StyledSelectField label="Pelabuhan Tujuan" />
            <StyledTextField label="Pelabuhan Transit" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Berat Bersih Total (KGM)" />
            <StyledTextField label="Berat Kotor Total (KGM)" />
            <StyledTextField label="Volume (M3)" />
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ margin: "1.4em 0 1em 0" }}>
        Data Peti Kemas dan Pengamas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField type="number" label="Jumlah Jenis Kemasan" />
            <StyledTextField type="number" label="Jumlah Peti Kemas" />
            <StyledTextField type="number" label="Jumlah Jenis Barang" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledSelectField label="Tempat Penimbunan" />
          </Stack>
          <Typography variant="h6" style={{ margin: "1.4em 0 1em 0" }}>
            Data Laras
          </Typography>
          <StyledSelectField label="Data Laras Barang" />
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ margin: "1.4em 0 1em 0" }}>
        Data Perkiraan Tanggal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField
              type="date"
              label="Perkiraan Tanggal Pengeluaran"
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(DataPemasukan2);
