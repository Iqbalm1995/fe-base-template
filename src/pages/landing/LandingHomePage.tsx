import { Box, Card, CardBody, Container, Text } from "@chakra-ui/react";
import HeaderContent2 from "@/components/HeaderContent2";
import SignatureLineColor from "@/components/BottomLineSignature";
import ProductsComponents from "@/components/ProductComponents";
import SectionHighlightProductStack from "@/components/SectionProductList";
import HeaderContent1 from "@/components/HeaderContent1";

const LandingHomePage = () => {
  return (
    <>
      {/* <HeaderContent2 /> */}
      <Box mx={"auto"} bgColor={"white"}>
        <Container maxW={"8xl"} px={12} pb={12} pt={2}>
          <HeaderContent1 />
          <Card boxShadow="lg">
            <CardBody>
              <Text color={"gray.600"} fontSize={"xl"} fontWeight={600} pb={3}>
                Informasi Terkini.
              </Text>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                odio, deserunt suscipit reiciendis temporibus, ratione
                reprehenderit maxime omnis consectetur facilis atque
                necessitatibus architecto, numquam praesentium quam adipisci.
                Optio, ab in.
              </p>
            </CardBody>
            <SignatureLineColor />
          </Card>
          {/* Company Highlight */}
          {/* <Box pt={"50px"}>
              <StackCompaniesList />
            </Box> */}
          {/* Produts */}
          <Box pt={"50px"}>{/* <ProductsComponents /> */}</Box>
          {/*  */}
          {/* <Box pt={"50px"}>
            <SectionHighlightProductStack />
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default LandingHomePage;
