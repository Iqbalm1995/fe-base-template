import { ReactNode } from "react";
import WithSubnavigation from "@/components/Navbar";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import TopNavigationLanding from "./TopNavigationLanding";

const LayoutLanding = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNewsHeadine />
      <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
        <TopNavigationLanding />
        {children}
      </Box>
      <BottomLineSignature />
    </>
  );
};

export default LayoutLanding;
