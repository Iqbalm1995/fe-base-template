import { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNavigationLandingAlt from "./TopNavigationLandingAlt";

const LayoutLandingAlt = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <TopNewsHeadine /> */}
      <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
        <TopNavigationLandingAlt />
        {children}
      </Box>
      <BottomLineSignature />
    </>
  );
};

export default LayoutLandingAlt;
