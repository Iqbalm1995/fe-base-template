import { Flex, Text, Image, HStack } from "@chakra-ui/react";

export const LogoApps = () => {
  return (
    <>
      {/* <Flex width={"70px"} ml={5}>
        <Image src={"./img/logo-bjb.png"} alt="Bank bjb" />
      </Flex> */}
      {/* <Text fontWeight={600} fontSize={"18px"} pl={3}>
        PORTAL
      </Text> */}
      <HStack pl={3} spacing={1}>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          // textShadow={"2px 2px 3px rgba(0, 0, 0, 0.3)"}
        >
          A
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          color={"secondary.500"}
          // textShadow={"2px 2px 3px rgba(0, 0, 0, 0.3)"}
        >
          P
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          // textShadow={"2px 2px 3px rgba(0, 0, 0, 0.3)"}
        >
          P
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          // textShadow={"2px 2px 3px rgba(0, 0, 0, 0.3)"}
        >
          S
        </Text>
      </HStack>
    </>
  );
};

export const LogoApps2 = ({ mode }: { mode: boolean }) => {
  return (
    <>
      <HStack pl={mode ? 0 : 3} spacing={1}>
        <Text fontWeight={600} fontSize={"2xl"}>
          A
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          color={"secondary.500"}
          display={mode ? "none" : "flex"}
        >
          P
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          display={mode ? "none" : "flex"}
        >
          P
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2xl"}
          display={mode ? "none" : "flex"}
        >
          S
        </Text>
      </HStack>
    </>
  );
};
