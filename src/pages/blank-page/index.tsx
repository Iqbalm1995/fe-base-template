import FooterLanding from "@/base_templates/layout/landing/FooterLanding";
import LayoutLanding from "@/base_templates/layout/landing/LayoutLanding";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const BlankPage = () => {
  return (
    <LayoutLanding>
      <HeadingContent />
      <BaseContentBody tittleContent="Content Data">
        <Flex h={500} />
      </BaseContentBody>
      <FooterLanding />
    </LayoutLanding>
  );
};

const HeadingContent = () => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }} // Responsive heights for different screen sizes
        w={"full"}
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(./img/bjb-head-image.jpg)`}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"-60px"}
        zIndex={1}
      >
        <Box
          pos={"absolute"}
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(to-l, rgba(9, 27, 42, 0.4) 0%, rgba(9, 27, 42, 0.9) 90%)"
          // bg={"red"}
        >
          <Container as={Stack} maxW={"container.xl"}>
            <Flex
              justifyContent={"start"}
              alignItems={"end"}
              h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }}
              color={"white"}
              pb={7}
            >
              <VStack justifyContent={"start"} w={"full"}>
                <Heading
                  as="h2"
                  size={{ base: "md", sm: "md", md: "md", lg: "xl" }}
                  color={"white"}
                  // bg={"blue"}
                  w={"full"}
                >
                  Blank Page
                </Heading>
                <Breadcrumb
                  w={"full"}
                  spacing="8px"
                  separator={<ChevronRightIcon color="gray.500" />}
                >
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Blank Page</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </VStack>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

const BaseContentBody = ({
  tittleContent,
  children,
}: {
  tittleContent: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <VStack w={"full"} gap={8}>
          <Flex justifyContent={"flex-start"} w={"full"}>
            <Heading as="h3" size="lg" color={"secondary.900"}>
              {tittleContent}
            </Heading>
          </Flex>
          <Flex justifyContent={"flex-start"} w={"full"}>
            {children}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};

export default BlankPage;
