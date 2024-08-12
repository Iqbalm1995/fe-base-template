import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import LoadingOverlay2 from "../LoadingOverlay2";
import NavigationBackoffice from "./NavigationBackoffice";

const LayoutBackoffice = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingOverlay2 isLoading={loading} />
      <Box minH="100vh" bg={"white"}>
        <NavigationBackoffice>{children}</NavigationBackoffice>
        {/* Footer */}
      </Box>
    </>
  );
};

export default LayoutBackoffice;
