import { Grid, Stack } from "@mui/material";
import React from "react";
import StyledTextField from "../../../StyledTextField";

function DataPengajuan() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={6}>
        <Stack gap={2}>
          <StyledTextField label="Kantor Pabean Asal" />
          <StyledTextField label="Kantor Pabean Asal" />
          <StyledTextField label="Kantor Pabean Asal" />
        </Stack>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Stack gap={2}>
          <StyledTextField label="Kantor Pabean Asal" />
          <StyledTextField label="Kantor Pabean Asal" />
          <StyledTextField type="date" label="Kantor Pabean Asal" />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default React.memo(DataPengajuan);
