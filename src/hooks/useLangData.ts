import { LANG_MASTER_LIST } from "@/constants/MasterConstant";
import {
  getLocalLang,
  postLocalLang,
  removeLocalLang,
} from "@/utils/langSwitcherUtils";
import { useEffect, useState } from "react";

export const useLangData = () => {
  const [LangData, setLangData] = useState<string>("ID");

  // Load the data from localStorage when the hook is first used
  useEffect(() => {
    try {
      const storedData = getLocalLang();
      console.log("Stored language:", storedData);
      if (storedData) {
        setLangData(storedData);
      }
    } catch (error) {
      console.error("Failed to retrieve local language:", error);
    }
  }, []);

  const updateLangData = (data: string) => {
    try {
      postLocalLang(data);
      setLangData(data);
    } catch (error) {
      console.error("Failed to update local language:", error);
    }
  };

  const clearLangData = () => {
    try {
      removeLocalLang();
      setLangData(LANG_MASTER_LIST[0]); // Assuming this is your default language
    } catch (error) {
      console.error("Failed to clear local language:", error);
    }
  };

  return {
    LangData,
    setLangData: updateLangData,
    clearLangData,
  };
};
