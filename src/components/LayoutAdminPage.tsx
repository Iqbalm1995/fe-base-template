import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import TopHeadWebMenu from "./TopHeadWebMenu";
import NavbarAdminPanel from "./NavbarAdminPanel";
import { FooterAdminPanel } from "./Footer";
import SignatureLineColor from "./BottomLineSignature";
import LayoutSidebarMenu from "./LayoutSidebarMenu";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box minH="100vh" bg={"white"}>
        {/* <TopHeadWebMenu /> */}
        {/* Navigation */}
        <LayoutSidebarMenu>{children}</LayoutSidebarMenu>
        {/* Footer */}
      </Box>
    </>
  );
};

export default LayoutAdmin;
