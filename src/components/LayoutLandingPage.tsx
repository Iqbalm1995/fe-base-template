import { ReactNode } from "react";
import WithSubnavigation from "@/components/Navbar";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SignatureLineColor from "./BottomLineSignature";
import TopHeadWebMenu from "./TopHeadWebMenu";
import FooterLanding from "./Footer";

const LayoutLanding = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}> */}
      <Box minH="100vh" bg={"white"}>
        <TopHeadWebMenu />
        <WithSubnavigation />
        {children}
      </Box>
      <FooterLanding />
      <Flex width="100%" alignItems="center">
        <Box width="50%" bg="#0B79CA" height="12px">
          {/* Content for the first stack */}
        </Box>
        <Box width="25%" bg="#0078FF" height="12px">
          {/* Content for the second stack */}
        </Box>
        <Box width="25%" bg="#EDC817" height="12px">
          {/* Content for the third stack */}
        </Box>
      </Flex>
    </>
  );
};

export default LayoutLanding;
