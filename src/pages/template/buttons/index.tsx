import BreadcrumbAdmin, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/admin/BreadcrumbAdmin";
import LayoutAdmin from "@/base_templates/layout/admin/LayoutAdmin";
import { Box, Card, CardBody, Container, VStack } from "@chakra-ui/react";
import { useState } from "react";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Buttons",
  breadCrumbPath: ["Admin", "Template", "Buttons"],
};

const ButtonsPage = () => {
  return (
    <>
      <LayoutAdmin>
        <BreadcrumbAdmin HeadData={HeadPageName} />
        <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
          <Card w={"full"} minH={"100vh"}>
            <CardBody p={10}></CardBody>
          </Card>
        </VStack>
      </LayoutAdmin>
    </>
  );
};

export default ButtonsPage;
