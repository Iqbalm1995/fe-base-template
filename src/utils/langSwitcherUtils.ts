import { LANG_MASTER_LIST } from "@/constants/MasterConstant";

const LANG_STORAGE_KEY = "lang";

export const postLocalLang = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LANG_STORAGE_KEY, JSON.stringify(key));
  }
};

export const removeLocalLang = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(LANG_STORAGE_KEY);
  }
};

export const getLocalLang = (): string => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(LANG_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : LANG_MASTER_LIST[0];
  }
  return LANG_MASTER_LIST[0];
};
