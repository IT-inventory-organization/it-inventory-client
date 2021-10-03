import React from "react";
// import * as yup from "yup";
import { Stack } from "@mui/material";
import StyledSelectField from "../StyledSelectField";
import { ReactComponent as IcBulletNext } from "../../assets/icons/ic_bulletnext.svg";
import styles from "../../styles/dashboard/index.module.scss";
import { useHistory } from "react-router";

function FormCreate() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/plb/add");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <StyledSelectField label={"Pengajuan Sebagai"} />
          <StyledSelectField label={"Diajukan Dikantor"} />
          <StyledSelectField label={"Jenis Pemberitahuan"} />
          <StyledSelectField label={"Jenis Dokumen BC"} />
        </Stack>
        <Stack mt={3} justifyContent="flex-end" direction="row">
          <button type="submit" className={styles.bootstrap_btn_save}>
            <span>Next</span> <IcBulletNext />
          </button>
        </Stack>
      </form>
    </>
  );
}

export default FormCreate;
