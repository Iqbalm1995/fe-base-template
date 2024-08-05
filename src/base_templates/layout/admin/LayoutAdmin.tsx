import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavigationAdmin from "./NavigationAdmin";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box minH="100vh" bg={"white"}>
        <NavigationAdmin>{children}</NavigationAdmin>
        {/* Footer */}
      </Box>
    </>
  );
};

export default LayoutAdmin;
