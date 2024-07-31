import { URL_API_MST_DAERAH } from "@/constants/url_api_constant";
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.timeout = Number(import.meta.env.VITE_AXIOS_SET_TIMEOUT);

export async function GetDataProvinsiServices() {
  const urlGet = `${URL_API_MST_DAERAH}api-wilayah-indonesia/api/provinces.json`;

  const response = await axios.get(urlGet);

  //   const response = await axios.get(urlGet, {
  //     headers: {
  //       Authorization: `Bearer ${data.token}`,
  //     },
  //   });

  return response;
}
