import { SET_LOADING, SET_MESSAGE, SET_SUCCESS, SET_ERROR } from "../actions";

const initialState = {
  dataHeader: {
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
  },
  dataHeaderIsCompleted: false,
  loading: false,
  error: "",
  message: "",
};

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_MESSAGE:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        user: payload,
        token: payload.token,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducers;
