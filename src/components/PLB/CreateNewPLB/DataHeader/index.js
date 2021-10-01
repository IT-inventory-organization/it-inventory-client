import { TextField } from "@mui/material";
import React from "react";
import useAccordion from "../../../useAccordion";
import FormDataPengajuan from "./DataPengajuan";

function DataHeader(props) {
  const { AcdContainer, AcdSummary, AcdDetails } = useAccordion();
  return (
    <>
      <AcdContainer>
        <AcdSummary>Data Pengajuan</AcdSummary>
        <AcdDetails>
          <FormDataPengajuan />
        </AcdDetails>
      </AcdContainer>
      <AcdContainer>
        <AcdSummary>Identitas Pengirim/Penerima</AcdSummary>
        <AcdDetails>
          <FormDataPengajuan />
        </AcdDetails>
      </AcdContainer>
      <AcdContainer>
        <AcdSummary>Data Pemasukan/Pengeluaran l</AcdSummary>
        <AcdDetails>
          <FormDataPengajuan />
        </AcdDetails>
      </AcdContainer>
      <AcdContainer>
        <AcdSummary>Data Pemasukan/Pengeluaran ll</AcdSummary>
        <AcdDetails>
          <FormDataPengajuan />
        </AcdDetails>
      </AcdContainer>
    </>
  );
}

export default React.memo(DataHeader);
