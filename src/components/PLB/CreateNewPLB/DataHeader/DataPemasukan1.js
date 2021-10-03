import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledSelectField from "../../../StyledSelectField";
import StyledTextField from "../../../StyledTextField";

function DataPemasukan1() {
  return (
    <>
      <Typography variant="h6" style={{ margin: "1em 0" }}>
        Data Transaksi Perdagangan
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledSelectField label="Transaksi" />
            <StyledSelectField label="Valuta" />
            <StyledTextField label="CIF" />
            <StyledTextField label="Freight" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Transaksi Lainnya" />
            <StyledTextField label="NDPBM Kurs" />
            <StyledSelectField label="Voluntary Declaration" />
            <StyledTextField label="Harga Penyerahan" />
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ margin: "1.4em 0 1em 0" }}>
        Data Pengangkutan
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledSelectField label="Cara Angkut" />
            <StyledSelectField label="Bendera" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="NamaPengangkut" />
            <StyledTextField label="Nomor Voy Flight Pol" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(DataPemasukan1);
