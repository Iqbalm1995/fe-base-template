import SignatureLineColor from "@/components/BottomLineSignature";
import LayoutLanding from "@/components/LayoutLandingPage";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

export interface AdminTittleBreadcrumb {
  titlePage: string;
  breadCrumbPath: string[];
}

const bgHeader = "../img/placeholder-header.png";

const BreadcrumbBackoffice = ({
  HeadData,
}: {
  HeadData: AdminTittleBreadcrumb;
}) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767.98px)");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      minWidth="max-content"
      gap={2}
      px={5}
      height={"60px"}
      color={"secondary.900"}
      flexDirection={{ base: isSmallerThan768 ? "column" : "row" }}
    >
      <Heading as="h3" size="lg">
        {HeadData.titlePage}
      </Heading>
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

export default BreadcrumbBackoffice;
