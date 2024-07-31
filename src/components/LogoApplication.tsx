import { Flex, Text, Image, HStack } from "@chakra-ui/react";

export const LogoApplication = () => {
  return (
    <>
      {/* <Flex width={"70px"} ml={5}>
        <Image src={"./img/logo-bjb.png"} alt="Bank bjb" />
      </Flex> */}
      {/* <Text fontWeight={600} fontSize={"18px"} pl={3}>
        PORTAL
      </Text> */}
      <HStack pl={3} spacing={1}>
        <Text fontWeight={600} fontSize={"2xl"}>
          P
        </Text>
        <Text fontWeight={800} fontSize={"2xl"} color={"#008DFF"}>
          O
        </Text>
        <Text fontWeight={600} fontSize={"2xl"}>
          R
        </Text>
        <Text fontWeight={600} fontSize={"2xl"}>
          T
        </Text>
        <Text fontWeight={600} fontSize={"2xl"}>
          A
        </Text>
        <Text fontWeight={600} fontSize={"2xl"}>
          L
        </Text>
      </HStack>
    </>
  );
};
