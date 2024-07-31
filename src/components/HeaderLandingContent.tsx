import SignatureLineColor from "@/components/BottomLineSignature";
import LayoutLanding from "@/components/LayoutLandingPage";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

export interface HeadTittleBreadcrumb {
  titlePage: string;
  breadCrumbPath: string[];
}

const bgHeader = "../img/placeholder-header.png";

const HeaderLandingContent = ({
  HeadData,
}: {
  HeadData: HeadTittleBreadcrumb;
}) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767.98px)");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      minWidth="max-content"
      backgroundImage={`url(${bgHeader})`}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      color={"white"}
      gap={2}
      px={2}
      height={"160px"}
      flexDirection={{ base: isSmallerThan768 ? "column" : "row" }}
    >
      <Box
        px={{ base: isSmallerThan768 ? "6" : "2" }}
        pb="1"
        pt={{ base: isSmallerThan768 ? "10" : "2" }}
      >
        <chakra.h2 fontSize="3xl" fontWeight="600">
          {HeadData.titlePage}
        </chakra.h2>
      </Box>
      <Box>
        <Breadcrumb
          p={{ base: isSmallerThan768 ? "4" : "2" }}
          pt={{ base: isSmallerThan768 ? "0" : "6" }}
        >
          {HeadData.breadCrumbPath.map((item: string) => {
            return (
              <BreadcrumbItem key={item}>
                <BreadcrumbLink href="#">{item}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default HeaderLandingContent;
