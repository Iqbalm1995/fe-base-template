export interface NasabahTypes {
  id: string;
  nama: string;
  golongan: number;
  npwp: string;
  alamat_domisili: string;
  kecamatan?: string | null;
  kelurahan?: string | null;
  kota?: string | null;
  kode_pos?: string | null;
  provinsi?: string | null;
  telepon?: string | null;
  fax?: string | null;
  email?: string | null;
  bidang_usaha?: string | null;
  callback_url?: string | null;
  jenis_perusahaan: number;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface NasabahRekeningTypes {
  id: string;
  nasabah_id: string;
  no_rekening: string;
  jenis: string;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export const initialValueNasabah: NasabahTypes = {
  id: "",
  nama: "",
  golongan: 0,
  npwp: "",
  alamat_domisili: "",
  kecamatan: "",
  kelurahan: "",
  kota: null,
  kode_pos: null,
  provinsi: null,
  telepon: null,
  fax: null,
  email: null,
  bidang_usaha: null,
  callback_url: null,
  jenis_perusahaan: 0,
  created_at: null,
  updated_at: null,
  deleted_at: null,
};

export const initialValueNasabahRekening: NasabahRekeningTypes = {
  id: "",
  nasabah_id: "",
  no_rekening: "",
  jenis: "",
  created_at: null,
  updated_at: null,
  deleted_at: null,
};
