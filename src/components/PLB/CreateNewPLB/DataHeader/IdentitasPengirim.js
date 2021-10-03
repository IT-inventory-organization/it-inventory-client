import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StyledTextField from "../../../StyledTextField";

function IdentitasPengirim() {
  return (
    <>
      <Typography variant="h6" style={{ margin: "1em 0" }}>
        Pengirim
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Jenis Identitas Pengirim" />
            <StyledTextField label="Nama Pengirim" />
            <StyledTextField label="Nomor Ijin Bpk Pengirim" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Nomor Identitas Pengirim" />
            <StyledTextField label="Alamat Pengirim" />
            <StyledTextField type="date" label="Tanggal Ijin Bpk Pengirim" />
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ margin: "1.4em 0 1em 0" }}>
        Penerima
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Jenis Identitas Penerima" />
            <StyledTextField label="Nama Penerima" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={2}>
            <StyledTextField label="Nomor Identitas Penerima" />
            <StyledTextField label="Alamat Penerima" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(IdentitasPengirim);
