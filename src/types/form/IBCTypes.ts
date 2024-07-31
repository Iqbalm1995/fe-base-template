import {
  NasabahRekeningTypes,
  NasabahTypes,
  initialValueNasabah,
  initialValueNasabahRekening,
} from "./NasabahTypes";

export interface FormPendaftaranIBC {
  nasabah: NasabahTypes;
  nasabahRekening: NasabahRekeningTypes;
  pemilikKuasa: IBCPemilikRekeningTypes[];
  penerimaKuasa: IBCPenerimaKuasaTypes[];
  pendaftaranRekNasabah: IBCRekeningNasabahTypes[];
  approval?: IBCApprovalTypes | null;
  maksimalTransfer?: IBCMaksimalTransferTypes | null;
  menuTambahan?: IBCMenuTambahanTypes | null;
  pemberianToken?: IBCPemberianTokenTypes | null;
  layananLain?: IBCLayananTypes | null;
}

export interface IBCLayananTypes {
  id: string;
  ibc_id: string;
  jumlah_request_roken?: number;
  corporate_id_request?: string;
}

export interface IBCPemilikRekeningTypes {
  id: string;
  product_id: string;
  no_reg?: string | null;
  nasabah_id: string;
  kartu_id: number;
  exp_date: string;
  nama_sesuai_id: string;
  nomor_kartu_id: string;
  alamat_sesuai_id: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jabatan: string;
  bagian: string;
  telepon?: string | null;
  handphone?: string | null;
  email?: string | null;
  jml_permohonan_token: number;
  corporate_id_request: string;
  penerima_kuasa?: string | null;
  kode_cabang: string;
  status: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCPenerimaKuasaTypes {
  id: string;
  ibc_id: string;
  kartu_id: number;
  exp_date: string;
  nama_sesuai_id: string;
  nomor_kartu_id: string;
  alamat_sesuai_id: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jabatan: string;
  bagian: string;
  telepon?: string | null;
  handphone?: string | null;
  email?: string | null;
  user_id_corporate_admin: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCApprovalTypes {
  id: string;
  ibc_id: string;
  ibc_verificator_level: number;
  nama_verifikator: string;
  tgl_verifikasi: string;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCMaksimalTransferTypes {
  id: string;
  ibc_id: string;
  maksimal_transfer: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCMenuTambahanTypes {
  id: string;
  ibc_id: string;
  menu_tambahan: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCPemberianTokenTypes {
  id: string;
  ibc_id: string;
  serial_number: string;
  nama_pengguna: string;
  user_id: string;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface IBCRekeningNasabahTypes {
  id: string;
  ibc_id: string;
  produk: string;
  kode_cabang: string;
  cif: string;
  no_rekening: string;
  nama_rekening: string;
  mata_uang: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

// --- INIT VALUES

export const ibcPemilikRekeningInitialValue: IBCPemilikRekeningTypes = {
  id: "",
  product_id: "",
  no_reg: null,
  nasabah_id: "",
  kartu_id: 0,
  exp_date: "",
  nama_sesuai_id: "",
  nomor_kartu_id: "",
  alamat_sesuai_id: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jabatan: "",
  bagian: "",
  telepon: null,
  handphone: null,
  email: null,
  jml_permohonan_token: 0,
  corporate_id_request: "",
  penerima_kuasa: null,
  kode_cabang: "",
  status: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcPenerimaKuasaInitialValue: IBCPenerimaKuasaTypes = {
  id: "",
  ibc_id: "",
  kartu_id: 0,
  exp_date: "",
  nama_sesuai_id: "",
  nomor_kartu_id: "",
  alamat_sesuai_id: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jabatan: "",
  bagian: "",
  telepon: null,
  handphone: null,
  email: null,
  user_id_corporate_admin: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcApprovalInitialValue: IBCApprovalTypes = {
  id: "",
  ibc_id: "",
  ibc_verificator_level: 0,
  nama_verifikator: "",
  tgl_verifikasi: "",
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcMaksimalTransferInitialValue: IBCMaksimalTransferTypes = {
  id: "",
  ibc_id: "",
  maksimal_transfer: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcMenuTambahanInitialValue: IBCMenuTambahanTypes = {
  id: "",
  ibc_id: "",
  menu_tambahan: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcPemberianTokenInitialValue: IBCPemberianTokenTypes = {
  id: "",
  ibc_id: "",
  serial_number: "",
  nama_pengguna: "",
  user_id: "",
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcRekeningNasabahInitialValue: IBCRekeningNasabahTypes = {
  id: "",
  ibc_id: "",
  produk: "",
  kode_cabang: "",
  cif: "",
  no_rekening: "",
  nama_rekening: "",
  mata_uang: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const ibcLayananInitialValue: IBCLayananTypes = {
  id: "",
  ibc_id: "",
  jumlah_request_roken: 0,
  corporate_id_request: "",
};

export const FormPendaftaranIBCInitValue: FormPendaftaranIBC = {
  nasabah: initialValueNasabah,
  nasabahRekening: initialValueNasabahRekening,
  pemilikKuasa: [],
  penerimaKuasa: [],
  pendaftaranRekNasabah: [],
  approval: null,
  maksimalTransfer: null,
  menuTambahan: null,
  pemberianToken: null,
  layananLain: ibcLayananInitialValue,
};


