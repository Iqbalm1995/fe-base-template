import { LANG_MASTER_LIST } from "@/constants/MasterConstant";
import { useLangData } from "@/hooks/useLangData";

export interface LangData {
  key: string;
  langIDText: string;
  langENText: string;
}

const LangDatas: LangData[] = [
  {
    key: "LandingTitleHead",
    langENText:
      "Achieve Greater Efficiency Fleksibilitas Corporate Bisnis Anda",
    langIDText: "AOKWOAKWOKAOKWOAKOWKAOKWOAKWO ASW....",
  },
];

//-----------------------------------------------------------------

export const TextLang = (key: string, lang: string): string => {
  //   const { LangData } = useLangData();
  const LangDataFilter: LangData | undefined = LangDatas.find(
    (x) => x.key === key
  );

  if (LangDataFilter == undefined) {
    return "Error Text Display.";
  }

  // ID
  if (lang === LANG_MASTER_LIST[0]) {
    return LangDataFilter.langIDText;
  }

  // EN
  if (lang === LANG_MASTER_LIST[1]) {
    return LangDataFilter.langENText;
  }

  return "Error Text Display.";
};
