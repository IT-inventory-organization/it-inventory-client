import React from "react";
import MainLayout from "../../layout/MainLayout";
import WrapSection from "../../components/WrapSection";

import DataHeader from "../../components/PLB/CreateNewPLB/DataHeader/";
import { Grid } from "@mui/material";

function CreateNewPLB() {
  return (
    <MainLayout>
      <Grid container my={3}>
        <WrapSection title="Create New PLB">
          <DataHeader />
        </WrapSection>
      </Grid>
    </MainLayout>
  );
}

export default CreateNewPLB;
