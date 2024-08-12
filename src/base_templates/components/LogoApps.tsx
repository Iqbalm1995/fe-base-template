import { Flex, Text, Image, HStack, StackDivider } from "@chakra-ui/react";
import Link from "next/link";
import LogoBjb from "../../../publi/img/logo-bjb.png";

export const LogoApplications = ({ colorText }: { colorText: string }) => {
  return (
    <>
      <Link href={"/"}>
        <HStack
          divider={<StackDivider display={{ base: "none", md: "flex" }} />}
          spacing={{ base: 0, md: 4 }}
        >
          <Image
            w={{ base: "50px", sm: "50px", md: "60px", lg: "60px" }}
            src={"/img/logo-bjb.png"}
            display={{ base: "none", md: "flex" }}
          ></Image>
          <Text
            fontWeight={600}
            fontSize={"xl"}
            letterSpacing={{
              base: 1,
              sm: 1,
              md: 5,
              lg: 5,
            }}
            color={colorText}
          >
            PORTAL
          </Text>
        </HStack>
      </Link>
    </>
  );
};
export const LogoApplicationsLite = ({ colorText }: { colorText: string }) => {
  return (
    <>
      <Link href={"/"}>
        <Image
          w={{ base: "50px", sm: "50px", md: "60px", lg: "60px" }}
          src={"/img/logo-bjb.png"}
          display={{ base: "none", md: "flex" }}
        ></Image>
      </Link>
    </>
  );
};
export const LogoApplicationsBackOffice = ({
  colorText,
}: {
  colorText: string;
}) => {
  return (
    <>
      <Link href={"/"}>
        <HStack
          divider={<StackDivider display={{ base: "none", md: "flex" }} />}
          spacing={{ base: 0, md: 2 }}
        >
          <Image
            w={{ base: "50px", sm: "50px", md: "60px", lg: "60px" }}
            src={"/img/logo-bjb.png"}
            display={{ base: "none", md: "flex" }}
          ></Image>
          <Text
            fontWeight={600}
            fontSize={"xl"}
            letterSpacing={0}
            color={colorText}
          >
            BACKOFFICE
          </Text>
        </HStack>
      </Link>
    </>
  );
};

export const LogoApps = () => {
  return (
    <>
      {/* <Flex width={"70px"} ml={5}>
        <Image src={"/img/logo-bjb.png"} alt="Bank bjb" />
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
