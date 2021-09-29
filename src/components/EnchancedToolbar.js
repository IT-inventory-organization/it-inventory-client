import { Button, Grid, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ButtonEnhanced = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
}));

function EnchancedToolbar(props) {
  const { handleOpenModal } = props;
  return (
    <Grid container sx={{ padding: "5px 20px" }}>
      <Grid lg={6} md={12} xs={12}>
        Left Content
      </Grid>
      <Grid lg={6} md={12} xs={12}>
        <Stack spacing={1} justifyContent="flex-end" direction="row">
          <ButtonEnhanced sx={{ color: "#5682FF" }}>View</ButtonEnhanced>
          <ButtonEnhanced sx={{ color: "#F9B800" }}>Edit</ButtonEnhanced>
          <ButtonEnhanced sx={{ color: "#F9B800" }}>Remove</ButtonEnhanced>
          <ButtonEnhanced sx={{ color: "#DE3D33" }}>Print</ButtonEnhanced>
          <ButtonEnhanced
            onClick={() => handleOpenModal()}
            sx={{
              backgroundColor: "#312E68",
              borderRadius: "10px",
              fontSize: ".8rem",
              textTransform: "capital",
            }}
            variant="contained"
          >
            Create New
          </ButtonEnhanced>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default EnchancedToolbar;
