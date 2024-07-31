export interface RegIBCFormNasabah {
  cif: string;
  legalName: string;
  commercialName: string;
  aliasName: string;
  golongan: number;
  npwp: string;
  alamat: string;
  rt: string;
  rw: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
  kodePos: string;
  telepon: string;
  hp: string;
  fax: string;
  email: string;
  website: string;
  bidangUsaha: string;
  lamaBerusaha: string;
  jumlahKaryawan: number;
  jenisPerusahaan: number;
  hubunganDenganBank: number;
  negaraAsal: string;
  bentukKorporasi: number;
  statusKorporasi: number;
  namaBentukKorporasi: string;
  nomorTdp: string;
  tanggalTerbitTdp: string;
  tanggalKadaluarsaTdp: string;
  nomorAktaPendirian: string;
  tempatPendirian: string;
  tanggalPendirian: string;
  tanggalTerbitAktaPendirian: string;
  nomorAktaPerubahanTerakhir: string;
  tanggalTerbitAktaPerubahanTerakhir: string;
  nomorSiup: string;
  tanggalTerbitSiup: string;
  tanggalKadaluarsaSiup: string;
  jenisSiup: number;
  termasukPenyediaJasaKeuangan: string;
  nomorSitu: string;
  tanggalTerbitSitu: string;
  tanggalKadaluarsaSitu: string;
  nomorPengesahanKemenkumham: string;
  tanggalTerbitPengesahanKemenkumham: string;
  tanggalKadaluarsaPengesahanKemenkumham: string;
  nomorPenegasanSkMenkeh: string;
  tanggalTerbitPengesahanSkMenkeh: string;
  tanggalKadaluarsaPengesahanSkMenkeh: string;
  nomorIjinLainnya: string;
  namaIjinLainnya: string;
  tanggalTerbitIjinLainnya: string;
  tanggalKadaluarsaIjinLainnya: string;
  sptTahunanTerakhir: string;
  cp: string;
  teleponCp: string;
}

export interface RegIBCFormPemilikRekeningData {
  kartuId: number;
  expDate: string;
  namaSesuaiId: string;
  nomorKartuId: string;
  alamatSesuaiId: string;
  tempatLahir: string;
  tanggalLahir: string;
  jabatan: string;
  bagian: string;
  telepon: string;
  handphone: string;
  email: string;
}

export interface RegIBCFormPemilikRekening {
  data: RegIBCFormPemilikRekeningData[];
}

export interface RegIBCFormPenerimaKuasaData {
  kartuId: number;
  expDate: string;
  namaSesuaiId: string;
  nomorKartuId: string;
  alamatSesuaiId: string;
  tempatLahir: string;
  tanggalLahir: string;
  jabatan: string;
  bagian: string;
  telepon: string;
  handphone: string;
  email: string;
}

export interface RegIBCFormPenerimaKuasa {
  data: RegIBCFormPenerimaKuasaData[];
}

export interface RegIBCFormRekeningNasabah {
  produk: string;
  kodeCabang: string;
  cif: string;
  nomorRekening: string;
  namaRekening: string;
  mataUang: number;
}

export interface RegIBCForm {
  productId: string;
  noReg: string;
  nasabahId: string;
  jenisForm: number;
  menuTambahan: number;
  maksimalNominalTransfer: number;
  jmlPermohonanToken: number;
  corporateId: string;
  penerimaKuasa: string;
  kodeCabang: string;
  kodeCs: string;
  namaCs: string;
  tanggalVerifikasiCs: string;
  kodeAdmin: string;
  namaAdmin: string;
  tanggalVerifikasiAdmin: string;
  kodeOfficer: string;
  namaOfficer: string;
  tanggalVerifikasiOfficer: string;
  kodeManagerOperasional: string;
  namaManagerOperasional: string;
  tanggalVerifikasiManagerOperasional: string;
  kodePimpinanCabang: string;
  namaPimpinanCabang: string;
  tanggalVerifikasiPimpinanCabang: string;
  formNasabah: RegIBCFormNasabah;
  formPemilikRekening: RegIBCFormPemilikRekening;
  formPenerimaKuasa: RegIBCFormPenerimaKuasa;
  formRekeningNasabah: RegIBCFormRekeningNasabah;
}

export const DummyDataFormIBC: RegIBCForm = {
  productId: "string",
  noReg: "string",
  nasabahId: "string",
  jenisForm: 0,
  menuTambahan: 0,
  maksimalNominalTransfer: 0,
  jmlPermohonanToken: 0,
  corporateId: "string",
  penerimaKuasa: "string",
  kodeCabang: "string",
  kodeCs: "string",
  namaCs: "string",
  tanggalVerifikasiCs: "2024-05-16T08:46:07.193Z",
  kodeAdmin: "string",
  namaAdmin: "string",
  tanggalVerifikasiAdmin: "2024-05-16T08:46:07.193Z",
  kodeOfficer: "string",
  namaOfficer: "string",
  tanggalVerifikasiOfficer: "2024-05-16T08:46:07.193Z",
  kodeManagerOperasional: "string",
  namaManagerOperasional: "string",
  tanggalVerifikasiManagerOperasional: "2024-05-16T08:46:07.193Z",
  kodePimpinanCabang: "string",
  namaPimpinanCabang: "string",
  tanggalVerifikasiPimpinanCabang: "2024-05-16T08:46:07.193Z",
  formNasabah: {
    cif: "string",
    legalName: "string",
    commercialName: "string",
    aliasName: "string",
    golongan: 0,
    npwp: "string",
    alamat: "string",
    rt: "string",
    rw: "string",
    kelurahan: "string",
    kecamatan: "string",
    kota: "string",
    provinsi: "string",
    kodePos: "string",
    telepon: "string",
    hp: "string",
    fax: "string",
    email: "string",
    website: "string",
    bidangUsaha: "string",
    lamaBerusaha: "string",
    jumlahKaryawan: 0,
    jenisPerusahaan: 0,
    hubunganDenganBank: 0,
    negaraAsal: "string",
    bentukKorporasi: 0,
    statusKorporasi: 0,
    namaBentukKorporasi: "string",
    nomorTdp: "string",
    tanggalTerbitTdp: "2024-05-16T08:46:07.194Z",
    tanggalKadaluarsaTdp: "2024-05-16T08:46:07.194Z",
    nomorAktaPendirian: "string",
    tempatPendirian: "string",
    tanggalPendirian: "2024-05-16T08:46:07.194Z",
    tanggalTerbitAktaPendirian: "2024-05-16T08:46:07.194Z",
    nomorAktaPerubahanTerakhir: "string",
    tanggalTerbitAktaPerubahanTerakhir: "2024-05-16T08:46:07.194Z",
    nomorSiup: "string",
    tanggalTerbitSiup: "2024-05-16T08:46:07.194Z",
    tanggalKadaluarsaSiup: "2024-05-16T08:46:07.194Z",
    jenisSiup: 0,
    termasukPenyediaJasaKeuangan: "string",
    nomorSitu: "string",
    tanggalTerbitSitu: "2024-05-16T08:46:07.194Z",
    tanggalKadaluarsaSitu: "2024-05-16T08:46:07.194Z",
    nomorPengesahanKemenkumham: "string",
    tanggalTerbitPengesahanKemenkumham: "2024-05-16T08:46:07.194Z",
    tanggalKadaluarsaPengesahanKemenkumham: "2024-05-16T08:46:07.194Z",
    nomorPenegasanSkMenkeh: "string",
    tanggalTerbitPengesahanSkMenkeh: "string",
    tanggalKadaluarsaPengesahanSkMenkeh: "string",
    nomorIjinLainnya: "string",
    namaIjinLainnya: "string",
    tanggalTerbitIjinLainnya: "2024-05-16T08:46:07.194Z",
    tanggalKadaluarsaIjinLainnya: "string",
    sptTahunanTerakhir: "string",
    cp: "string",
    teleponCp: "string",
  },
  formPemilikRekening: {
    data: [
      {
        kartuId: 0,
        expDate: "2024-05-16T08:46:07.195Z",
        namaSesuaiId: "string",
        nomorKartuId: "string",
        alamatSesuaiId: "string",
        tempatLahir: "string",
        tanggalLahir: "2024-05-16T08:46:07.195Z",
        jabatan: "string",
        bagian: "string",
        telepon: "string",
        handphone: "string",
        email: "string",
      },
    ],
  },
  formPenerimaKuasa: {
    data: [
      {
        kartuId: 0,
        expDate: "2024-05-16T08:46:07.195Z",
        namaSesuaiId: "string",
        nomorKartuId: "string",
        alamatSesuaiId: "string",
        tempatLahir: "string",
        tanggalLahir: "2024-05-16T08:46:07.195Z",
        jabatan: "string",
        bagian: "string",
        telepon: "string",
        handphone: "string",
        email: "string",
      },
    ],
  },
  formRekeningNasabah: {
    produk: "string",
    kodeCabang: "string",
    cif: "string",
    nomorRekening: "string",
    namaRekening: "string",
    mataUang: 0,
  },
};

export const initialValueDataFormIBC: RegIBCForm = {
  productId: "",
  noReg: "",
  nasabahId: "",
  jenisForm: 0,
  menuTambahan: 0,
  maksimalNominalTransfer: 0,
  jmlPermohonanToken: 0,
  corporateId: "",
  penerimaKuasa: "",
  kodeCabang: "",
  kodeCs: "",
  namaCs: "",
  tanggalVerifikasiCs: new Date().toISOString(),
  kodeAdmin: "",
  namaAdmin: "",
  tanggalVerifikasiAdmin: new Date().toISOString(),
  kodeOfficer: "",
  namaOfficer: "",
  tanggalVerifikasiOfficer: new Date().toISOString(),
  kodeManagerOperasional: "",
  namaManagerOperasional: "",
  tanggalVerifikasiManagerOperasional: new Date().toISOString(),
  kodePimpinanCabang: "",
  namaPimpinanCabang: "",
  tanggalVerifikasiPimpinanCabang: new Date().toISOString(),
  formNasabah: {
    cif: "",
    legalName: "",
    commercialName: "",
    aliasName: "",
    golongan: 0,
    npwp: "",
    alamat: "",
    rt: "",
    rw: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    provinsi: "",
    kodePos: "",
    telepon: "",
    hp: "",
    fax: "",
    email: "",
    website: "",
    bidangUsaha: "",
    lamaBerusaha: "",
    jumlahKaryawan: 0,
    jenisPerusahaan: 0,
    hubunganDenganBank: 0,
    negaraAsal: "",
    bentukKorporasi: 0,
    statusKorporasi: 0,
    namaBentukKorporasi: "",
    nomorTdp: "",
    tanggalTerbitTdp: new Date().toISOString(),
    tanggalKadaluarsaTdp: new Date().toISOString(),
    nomorAktaPendirian: "",
    tempatPendirian: "",
    tanggalPendirian: new Date().toISOString(),
    tanggalTerbitAktaPendirian: new Date().toISOString(),
    nomorAktaPerubahanTerakhir: "",
    tanggalTerbitAktaPerubahanTerakhir: new Date().toISOString(),
    nomorSiup: "",
    tanggalTerbitSiup: new Date().toISOString(),
    tanggalKadaluarsaSiup: new Date().toISOString(),
    jenisSiup: 0,
    termasukPenyediaJasaKeuangan: "",
    nomorSitu: "",
    tanggalTerbitSitu: new Date().toISOString(),
    tanggalKadaluarsaSitu: new Date().toISOString(),
    nomorPengesahanKemenkumham: "",
    tanggalTerbitPengesahanKemenkumham: new Date().toISOString(),
    tanggalKadaluarsaPengesahanKemenkumham: new Date().toISOString(),
    nomorPenegasanSkMenkeh: "",
    tanggalTerbitPengesahanSkMenkeh: "",
    tanggalKadaluarsaPengesahanSkMenkeh: "",
    nomorIjinLainnya: "",
    namaIjinLainnya: "",
    tanggalTerbitIjinLainnya: new Date().toISOString(),
    tanggalKadaluarsaIjinLainnya: "",
    sptTahunanTerakhir: "",
    cp: "",
    teleponCp: "",
  },
  formPemilikRekening: {
    data: [],
  },
  formPenerimaKuasa: {
    data: [],
  },
  formRekeningNasabah: {
    produk: "",
    kodeCabang: "",
    cif: "",
    nomorRekening: "",
    namaRekening: "",
    mataUang: 0,
  },
};

export const initialValueDataFormIBCNasabah: RegIBCFormNasabah = {
  cif: "",
  legalName: "",
  commercialName: "",
  aliasName: "",
  golongan: 0,
  npwp: "",
  alamat: "",
  rt: "",
  rw: "",
  kelurahan: "",
  kecamatan: "",
  kota: "",
  provinsi: "",
  kodePos: "",
  telepon: "",
  hp: "",
  fax: "",
  email: "",
  website: "",
  bidangUsaha: "",
  lamaBerusaha: "",
  jumlahKaryawan: 0,
  jenisPerusahaan: 0,
  hubunganDenganBank: 0,
  negaraAsal: "",
  bentukKorporasi: 0,
  statusKorporasi: 0,
  namaBentukKorporasi: "",
  nomorTdp: "",
  tanggalTerbitTdp: new Date().toISOString(),
  tanggalKadaluarsaTdp: new Date().toISOString(),
  nomorAktaPendirian: "",
  tempatPendirian: "",
  tanggalPendirian: new Date().toISOString(),
  tanggalTerbitAktaPendirian: new Date().toISOString(),
  nomorAktaPerubahanTerakhir: "",
  tanggalTerbitAktaPerubahanTerakhir: new Date().toISOString(),
  nomorSiup: "",
  tanggalTerbitSiup: new Date().toISOString(),
  tanggalKadaluarsaSiup: new Date().toISOString(),
  jenisSiup: 0,
  termasukPenyediaJasaKeuangan: "",
  nomorSitu: "",
  tanggalTerbitSitu: new Date().toISOString(),
  tanggalKadaluarsaSitu: new Date().toISOString(),
  nomorPengesahanKemenkumham: "",
  tanggalTerbitPengesahanKemenkumham: new Date().toISOString(),
  tanggalKadaluarsaPengesahanKemenkumham: new Date().toISOString(),
  nomorPenegasanSkMenkeh: "",
  tanggalTerbitPengesahanSkMenkeh: "",
  tanggalKadaluarsaPengesahanSkMenkeh: "",
  nomorIjinLainnya: "",
  namaIjinLainnya: "",
  tanggalTerbitIjinLainnya: new Date().toISOString(),
  tanggalKadaluarsaIjinLainnya: "",
  sptTahunanTerakhir: "",
  cp: "",
  teleponCp: "",
};
