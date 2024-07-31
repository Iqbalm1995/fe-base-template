interface MasterDataProvnisiTypes {
  id: string;
  name: string;
}

interface MasterDataKotaTypes {
  id: string;
  province_id: string;
  name: string;
}

interface MasterDataKecamatanTypes {
  id: string;
  regency_id: string;
  name: string;
}

interface MasterDataKelurahanTypes {
  id: string;
  district_id: string;
  name: string;
}

// null
export const MasterDataProvinsi: MasterDataProvnisiTypes[] = [
  {
    id: "11",
    name: "ACEH",
  },
  {
    id: "12",
    name: "SUMATERA UTARA",
  },
  {
    id: "13",
    name: "SUMATERA BARAT",
  },
  {
    id: "14",
    name: "RIAU",
  },
  {
    id: "15",
    name: "JAMBI",
  },
  {
    id: "16",
    name: "SUMATERA SELATAN",
  },
  {
    id: "17",
    name: "BENGKULU",
  },
  {
    id: "18",
    name: "LAMPUNG",
  },
  {
    id: "19",
    name: "KEPULAUAN BANGKA BELITUNG",
  },
  {
    id: "21",
    name: "KEPULAUAN RIAU",
  },
  {
    id: "31",
    name: "DKI JAKARTA",
  },
  {
    id: "32",
    name: "JAWA BARAT",
  },
  {
    id: "33",
    name: "JAWA TENGAH",
  },
  {
    id: "34",
    name: "DI YOGYAKARTA",
  },
  {
    id: "35",
    name: "JAWA TIMUR",
  },
  {
    id: "36",
    name: "BANTEN",
  },
  {
    id: "51",
    name: "BALI",
  },
  {
    id: "52",
    name: "NUSA TENGGARA BARAT",
  },
  {
    id: "53",
    name: "NUSA TENGGARA TIMUR",
  },
  {
    id: "61",
    name: "KALIMANTAN BARAT",
  },
  {
    id: "62",
    name: "KALIMANTAN TENGAH",
  },
  {
    id: "63",
    name: "KALIMANTAN SELATAN",
  },
  {
    id: "64",
    name: "KALIMANTAN TIMUR",
  },
  {
    id: "65",
    name: "KALIMANTAN UTARA",
  },
  {
    id: "71",
    name: "SULAWESI UTARA",
  },
  {
    id: "72",
    name: "SULAWESI TENGAH",
  },
  {
    id: "73",
    name: "SULAWESI SELATAN",
  },
  {
    id: "74",
    name: "SULAWESI TENGGARA",
  },
  {
    id: "75",
    name: "GORONTALO",
  },
  {
    id: "76",
    name: "SULAWESI BARAT",
  },
  {
    id: "81",
    name: "MALUKU",
  },
  {
    id: "82",
    name: "MALUKU UTARA",
  },
  {
    id: "91",
    name: "PAPUA BARAT",
  },
  {
    id: "94",
    name: "PAPUA",
  },
];

// 64
export const MasterDataKota: MasterDataKotaTypes[] = [
  {
    id: "3201",
    province_id: "32",
    name: "KABUPATEN BOGOR",
  },
  {
    id: "3202",
    province_id: "32",
    name: "KABUPATEN SUKABUMI",
  },
  {
    id: "3203",
    province_id: "32",
    name: "KABUPATEN CIANJUR",
  },
  {
    id: "3204",
    province_id: "32",
    name: "KABUPATEN BANDUNG",
  },
  {
    id: "3205",
    province_id: "32",
    name: "KABUPATEN GARUT",
  },
  {
    id: "3206",
    province_id: "32",
    name: "KABUPATEN TASIKMALAYA",
  },
  {
    id: "3207",
    province_id: "32",
    name: "KABUPATEN CIAMIS",
  },
  {
    id: "3208",
    province_id: "32",
    name: "KABUPATEN KUNINGAN",
  },
  {
    id: "3209",
    province_id: "32",
    name: "KABUPATEN CIREBON",
  },
  {
    id: "3210",
    province_id: "32",
    name: "KABUPATEN MAJALENGKA",
  },
  {
    id: "3211",
    province_id: "32",
    name: "KABUPATEN SUMEDANG",
  },
  {
    id: "3212",
    province_id: "32",
    name: "KABUPATEN INDRAMAYU",
  },
  {
    id: "3213",
    province_id: "32",
    name: "KABUPATEN SUBANG",
  },
  {
    id: "3214",
    province_id: "32",
    name: "KABUPATEN PURWAKARTA",
  },
  {
    id: "3215",
    province_id: "32",
    name: "KABUPATEN KARAWANG",
  },
  {
    id: "3216",
    province_id: "32",
    name: "KABUPATEN BEKASI",
  },
  {
    id: "3217",
    province_id: "32",
    name: "KABUPATEN BANDUNG BARAT",
  },
  {
    id: "3218",
    province_id: "32",
    name: "KABUPATEN PANGANDARAN",
  },
  {
    id: "3271",
    province_id: "32",
    name: "KOTA BOGOR",
  },
  {
    id: "3272",
    province_id: "32",
    name: "KOTA SUKABUMI",
  },
  {
    id: "3273",
    province_id: "32",
    name: "KOTA BANDUNG",
  },
  {
    id: "3274",
    province_id: "32",
    name: "KOTA CIREBON",
  },
  {
    id: "3275",
    province_id: "32",
    name: "KOTA BEKASI",
  },
  {
    id: "3276",
    province_id: "32",
    name: "KOTA DEPOK",
  },
  {
    id: "3277",
    province_id: "32",
    name: "KOTA CIMAHI",
  },
  {
    id: "3278",
    province_id: "32",
    name: "KOTA TASIKMALAYA",
  },
  {
    id: "3279",
    province_id: "32",
    name: "KOTA BANJAR",
  },
];

// 3273
export const MasterDataKecamatan: MasterDataKecamatanTypes[] = [
  {
    id: "3273010",
    regency_id: "3273",
    name: "BANDUNG KULON",
  },
  {
    id: "3273020",
    regency_id: "3273",
    name: "BABAKAN CIPARAY",
  },
  {
    id: "3273030",
    regency_id: "3273",
    name: "BOJONGLOA KALER",
  },
  {
    id: "3273040",
    regency_id: "3273",
    name: "BOJONGLOA KIDUL",
  },
  {
    id: "3273050",
    regency_id: "3273",
    name: "ASTANAANYAR",
  },
  {
    id: "3273060",
    regency_id: "3273",
    name: "REGOL",
  },
  {
    id: "3273070",
    regency_id: "3273",
    name: "LENGKONG",
  },
  {
    id: "3273080",
    regency_id: "3273",
    name: "BANDUNG KIDUL",
  },
  {
    id: "3273090",
    regency_id: "3273",
    name: "BUAHBATU",
  },
  {
    id: "3273100",
    regency_id: "3273",
    name: "RANCASARI",
  },
  {
    id: "3273101",
    regency_id: "3273",
    name: "GEDEBAGE",
  },
  {
    id: "3273110",
    regency_id: "3273",
    name: "CIBIRU",
  },
  {
    id: "3273111",
    regency_id: "3273",
    name: "PANYILEUKAN",
  },
  {
    id: "3273120",
    regency_id: "3273",
    name: "UJUNG BERUNG",
  },
  {
    id: "3273121",
    regency_id: "3273",
    name: "CINAMBO",
  },
  {
    id: "3273130",
    regency_id: "3273",
    name: "ARCAMANIK",
  },
  {
    id: "3273141",
    regency_id: "3273",
    name: "ANTAPANI",
  },
  {
    id: "3273142",
    regency_id: "3273",
    name: "MANDALAJATI",
  },
  {
    id: "3273150",
    regency_id: "3273",
    name: "KIARACONDONG",
  },
  {
    id: "3273160",
    regency_id: "3273",
    name: "BATUNUNGGAL",
  },
  {
    id: "3273170",
    regency_id: "3273",
    name: "SUMUR BANDUNG",
  },
  {
    id: "3273180",
    regency_id: "3273",
    name: "ANDIR",
  },
  {
    id: "3273190",
    regency_id: "3273",
    name: "CICENDO",
  },
  {
    id: "3273200",
    regency_id: "3273",
    name: "BANDUNG WETAN",
  },
  {
    id: "3273210",
    regency_id: "3273",
    name: "CIBEUNYING KIDUL",
  },
  {
    id: "3273220",
    regency_id: "3273",
    name: "CIBEUNYING KALER",
  },
  {
    id: "3273230",
    regency_id: "3273",
    name: "COBLONG",
  },
  {
    id: "3273240",
    regency_id: "3273",
    name: "SUKAJADI",
  },
  {
    id: "3273250",
    regency_id: "3273",
    name: "SUKASARI",
  },
  {
    id: "3273260",
    regency_id: "3273",
    name: "CIDADAP",
  },
];

// 3273170
export const MasterDataKelurahan: MasterDataKelurahanTypes[] = [
  {
    id: "3273170001",
    district_id: "3273170",
    name: "BRAGA",
  },
  {
    id: "3273170002",
    district_id: "3273170",
    name: "KEBON PISANG",
  },
  {
    id: "3273170003",
    district_id: "3273170",
    name: "MERDEKA",
  },
  {
    id: "3273170004",
    district_id: "3273170",
    name: "BABAKAN CIAMIS",
  },
];
