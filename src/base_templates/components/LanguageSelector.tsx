import { Button, ButtonGroup, HStack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const LanguageSelector = () => {
  const [scrollY, setScrollY] = useState(0);

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
            colorScheme={"secondary"}
            variant={"solid"}
            size={"xs"}
            isActive
          >
            ID
          </Button>
          <Button colorScheme={"gray"} variant={"solid"} size={"xs"}>
            EN
          </Button>
        </ButtonGroup>
      </HStack>
    </>
  );
};
