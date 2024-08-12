import BreadcrumbBackoffice, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/backoffice/BreadcrumbBackoffice";
import LayoutBackoffice from "@/base_templates/layout/backoffice/LayoutBackoffice";
import { Card, CardBody, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Dashboard",
  breadCrumbPath: ["Admin", "Dashboard"],
};

const BackOffice = () => {
  return (
    <>
      <LayoutBackoffice>
        <BreadcrumbBackoffice HeadData={HeadPageName} />
        <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
          <Card w={"full"}>
            <CardBody>
              <Flex minH={"100vh"}>
                <Grid
                  templateColumns="repeat(12, 1fr)"
                  gap={4}
                  w={"full"}
                >
                  <GridItem colSpan={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                    {/* <Flex w={"full"} h={"100px"} bg={"red"}></Flex> */}
                  </GridItem>
                </Grid>
              </Flex>
            </CardBody>
          </Card>
        </VStack>
      </LayoutBackoffice>
    </>
  );
};

export default BackOffice;
