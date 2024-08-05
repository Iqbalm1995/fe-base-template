import { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import TopNavigationLanding from "./TopNavigationLanding";

const LayoutLanding = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <TopNewsHeadine /> */}
      <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
        <TopNavigationLanding />
        {children}
      </Box>
      <BottomLineSignature />
    </>
  );
};

export default LayoutLanding;
