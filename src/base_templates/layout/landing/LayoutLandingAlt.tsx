import { ReactNode, useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNavigationLandingAlt from "./TopNavigationLandingAlt";
import LoadingOverlay from "../LoadingOverlay";

const LayoutLandingAlt = ({ children }: { children: ReactNode }) => {
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
            <TopNavigationLandingAlt />
            {children}
          </Box>
          <BottomLineSignature />
        </Box>
      </Box>
    </>
  );
};

export default LayoutLandingAlt;
