import BreadcrumbAdmin, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/admin/BreadcrumbAdmin";
import LayoutAdmin from "@/base_templates/layout/admin/LayoutAdmin";
import { Box, Card, CardBody, Container, VStack } from "@chakra-ui/react";
import { useState } from "react";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Tables",
  breadCrumbPath: ["Admin", "Template", "Tables"],
};

const TablesPage = () => {
  return (
    <>
      <LayoutAdmin>
        <Box mx={"auto"} bgColor={"gray.100"}>
          <Container maxW={"8xl"} px={12} pb={12} pt={2} minH={"100vh"}>
            <BreadcrumbAdmin HeadData={HeadPageName} />
            <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
              <Card w={"full"} minH={"100vh"}>
                <CardBody p={10}></CardBody>
              </Card>
            </VStack>
          </Container>
        </Box>
      </LayoutAdmin>
    </>
  );
};

export default TablesPage;
