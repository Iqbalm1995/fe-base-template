import { ReactNode, useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import TopNavigationLanding from "./TopNavigationLanding";
import LoadingScreen from "../LoadingScreen";
import LoadingOverlay from "../LoadingOverlay";

const LayoutLanding = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box position="relative" minHeight="100vh">
        <LoadingOverlay isLoading={loading} />
        <Box
          opacity={loading ? 0.5 : 1}
          pointerEvents={loading ? "none" : "auto"}
        >
          <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
            <TopNavigationLanding />
            {children}
          </Box>
          <BottomLineSignature />
        </Box>
      </Box>
    </>
  );
};

export default LayoutLanding;
