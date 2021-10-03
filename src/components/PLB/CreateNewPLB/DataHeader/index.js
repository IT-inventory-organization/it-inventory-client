import React from "react";
import useAccordion from "../../../useAccordion";
import FormDataPemasukan1 from "./DataPemasukan1";
import FormDataPemasukan2 from "./DataPemasukan2";
import FormDataPengajuan from "./DataPengajuan";
import FormIdentitasPengirim from "./IdentitasPengirim";
import { Formik } from "formik";
import styles from "../../../../styles/dashboard/index.module.scss";
import { ReactComponent as IcBulletNext } from "../../../../assets/icons/ic_bulletnext.svg";
import { Stack } from "@mui/material";

function DataHeader(props) {
  const { AcdContainer, AcdSummary, AcdDetails } = useAccordion();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Formik
        initialValues={{
          kantorPabeanAsal: "",
          kategoryPemberitahuan: "",
          kategoryPengeluaran: "",
          tujuanPengeluaran: "",
          asalBarang: "",
          caraPembayaran: "",
          nomorIjinBpkPengirim: "",
          tanggalIjinBpkPengirim: "",
          jenisIdentitasPenerima: "",
          nomorIdentitasPenerima: "",
          namaPenerima: "",
          alamatPenerima: "",
          jenisIdentitasPengirim: "",
          nomorIdentitasPengirim: "",
          namaPengirim: "",
          alamatPengirim: "",
          transaksi: "",
          transaksiLainnya: "",
          valuta: "",
          kursNDPBM: "",
          cif: "",
          voluntaryDeclaration: "",
          freight: "",
          caraAngkut: "",
          namaPengangkut: "",
          bendera: "",
          nomorVoyFlightPol: "",
          hargaPenyerahan: "",
          pelabuhanMuat: "",
          pelabuhanTujuan: "",
          pelabuhanTransit: "",
          beratBersih: "",
          beratKotor: "",
          volume: "",
          jumlahJenisKemasan: "",
          jumlahPetiKemas: "",
          jumlahJenisBarang: "",
          tempatPenimbunan: "",
          perkiraanTanggalPengeluaran: "",
          dataKertasLarasBarang: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} autoComplete={false}>
              <AcdContainer>
                <AcdSummary>Data Pengajuan</AcdSummary>
                <AcdDetails>
                  <FormDataPengajuan formik={formik} />
                </AcdDetails>
              </AcdContainer>
              <AcdContainer>
                <AcdSummary>Identitas Pengirim/Penerima</AcdSummary>
                <AcdDetails>
                  <FormIdentitasPengirim />
                </AcdDetails>
              </AcdContainer>
              <AcdContainer>
                <AcdSummary>Data Pemasukan/Pengeluaran l</AcdSummary>
                <AcdDetails>
                  <FormDataPemasukan1 />
                </AcdDetails>
              </AcdContainer>
              <AcdContainer>
                <AcdSummary>Data Pemasukan/Pengeluaran ll</AcdSummary>
                <AcdDetails>
                  <FormDataPemasukan2 />
                </AcdDetails>
              </AcdContainer>

              <Stack mt={3} justifyContent="flex-end" direction="row">
                <button type="submit" className={styles.bootstrap_btn_save}>
                  <span>Next</span> <IcBulletNext />
                </button>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default React.memo(DataHeader);
