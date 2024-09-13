import { LANG_MASTER_LIST } from "@/constants/MasterConstant";
import { LanguageContext } from "@/context/LanguageContext";
import { useLangData } from "@/hooks/useLangData";
import { Button, ButtonGroup, HStack, StackDivider } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

export const LanguageSelector = () => {
  const [scrollY, setScrollY] = useState(0);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HStack divider={<StackDivider />}>
        <ButtonGroup size="xs" isAttached>
          <Button
            colorScheme={
              language === LANG_MASTER_LIST[0] ? "secondary" : "gray"
            }
            variant={"solid"}
            size={"xs"}
            isActive={language === LANG_MASTER_LIST[0] ? true : false}
            onClick={() => {
              setLanguage(LANG_MASTER_LIST[0]);
            }}
          >
            {LANG_MASTER_LIST[0]}
          </Button>
          <Button
            colorScheme={
              language === LANG_MASTER_LIST[1] ? "secondary" : "gray"
            }
            variant={"solid"}
            size={"xs"}
            isActive={language === LANG_MASTER_LIST[1] ? true : false}
            onClick={() => {
              setLanguage(LANG_MASTER_LIST[1]);
            }}
          >
            {LANG_MASTER_LIST[1]}
          </Button>
        </ButtonGroup>
      </HStack>
    </>
  );
};
